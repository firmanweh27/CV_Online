"use client";
import { useState } from "react";

export default function Form() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [isSent, setIsSent] = useState(false);

  function handleNamaChange(e: any) {
    setNama(e.target.value);
  }

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }

  function handlePesanChange(e: any) {
    setPesan(e.target.value);
  }

  if (isSent) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Formulir Dikirim</h1>
        <h2 className="text-lg">Nama: {nama}</h2>
        <h2 className="text-lg">Email: {email}</h2>
        <h2 className="text-lg">Pesan: {pesan}</h2>
        <p className="mt-4 text-gray-700">Data di atas akan segera di input ke database. Terimakasih!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-center mt-10 mb-5 text-2xl font-bold">Contact Saya</h2>
      <div className="flex justify-center">
        <form
          className="flex flex-col p-6 bg-white shadow-lg rounded-lg w-80"
          onSubmit={(e: any) => {
            e.preventDefault();
            setIsSent(true);
          }}
        >
          <label className="mb-2 font-semibold">
            Nama depan:
            <input
              type="text"
              className="border-2 border-solid border-slate-950 rounded-md p-2 w-full mt-1"
              onChange={handleNamaChange}
              required
            />
          </label>
          <label className="mb-2 font-semibold">
            Email:
            <input
              type="email"
              className="border-2 border-solid border-slate-950 rounded-md p-2 w-full mt-1"
              onChange={handleEmailChange}
              required
            />
          </label>
          <label className="mb-2 font-semibold">
            Pesan:
            <textarea
              className="border-2 border-solid border-slate-950 rounded-md p-2 w-full mt-1"
              onChange={handlePesanChange}
              required
            />
          </label>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="rounded-full bg-green-500 text-white py-2 px-4 hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="reset"
              className="rounded-full bg-slate-500 text-white py-2 px-4 hover:bg-slate-600"
              onClick={() => {
                setNama('');
                setEmail('');
                setPesan('');
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
