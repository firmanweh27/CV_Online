"use client"; 

import React, { useState, useEffect } from "react";

export default function WarnaFavorit() {
  const [warna, setWarna] = useState("blue");

  const pilihanWarna = ["black", "yellow", "blue", "brown", "green", "red", "white" ];

  useEffect(() => {
    document.body.style.backgroundColor = warna; 
  }, [warna]); 

  return (
    <section>
      <h1 className="text-center">Pilih Warna</h1>

      {/* Pilihan warna */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {pilihanWarna.map((warnaPilihan) => (
          <button
            key={warnaPilihan}
            onClick={() => setWarna(warnaPilihan)}
            style={{
              backgroundColor: warnaPilihan,
              color: "white",
              padding: "10px",
              margin: "0 10px",
              border: "none",
              cursor: "pointer"
            }}
          >
            {warnaPilihan.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}