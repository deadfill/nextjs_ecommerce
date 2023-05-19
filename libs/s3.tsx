import S3 from "aws-sdk/clients/s3";
import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

const s3 = new S3({
  accessKeyId: "cv42758",
  secretAccessKey: "8a7d68b194880b9b601839dd3c28a649",
  region: "ru-1",
  endpoint: "https://s3.timeweb.com",
});

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);

  useEffect(() => {
    return upload?.abort();
  }, []);

  useEffect(() => {
    setUpload(null);
  }, [file]);

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setFile(e.target.files![0]);
  };

  const handleUpload: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (!file) return;
    const params = {
      Bucket: "41591949-c38f91aa-39f7-48e6-832c-c590ded4c690",
      Key: file.name,
      Body: file,
    };
    console.log(params);

    try {
      const upload = s3.upload(params);
      setUpload(upload);
      upload.on("httpUploadProgress", (p) => {
        console.log(p.loaded / p.total);
      });
      await upload.promise();
      console.log(`File uploaded successfully: ${file.name}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!upload) return;
    upload.abort();
    setUpload(null);
  };
  return (
    <div className="dark flex min-h-screen w-full items-center justify-center">
      <div>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </div>
      <main>
        <form className="flex flex-col gap-4 rounded bg-stone-800 p-10 text-white shadow">
          <input type="file" onChange={handleFileChange} />
          <button
            className="rounded bg-green-500 p-2 shadow"
            onClick={handleUpload}
          >
            Upload
          </button>
          {upload && (
            <>
              <button
                className="rounded bg-red-500 p-2 shadow"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          )}
        </form>
      </main>
    </div>
  );
}
