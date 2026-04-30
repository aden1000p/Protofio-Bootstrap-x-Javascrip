const data = [
  {
    nama: "kalkulator",
    img: "images/gambar1.png",
    desc: "Ini adalah sebuah project bernama kalkulator yang sudah dimodifikasikan meskipun belum sempuran sebenarnya ada fitur yang masih tahap awal",
  },

  {
    nama: "pilih warna",
    img: "images/gambar2.png",
    desc: "ini adalah sebuah project bernama pilih warna sangat simple tapi mungkin saja ini penting bagi yang mau mengubah warna dan fitur ini sangat terbatas",
  },

  {
    nama: "Motivasi Random",
    img: "images/gambar3.png",
    desc: "ini adalah sebuah project bernama motivasi random ini banyak fitur ada mengubah warna, mengubah shadow dan mengubah jenis font",
  },

  {
    nama: "to Do list",
    img: "images/gambar4.png",
    desc: "ini adalah sebuah project bernama OT do list ini banyak fitur bisa menambah, menghapus dan menduplikat tapi ada tahap pengembangan seperti mengubah font dll",
  },
];

const warnaInput = document.getElementById("warnaInput");
const colortext = document.querySelectorAll(".font-same");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("BackgroundInput");
const showHidden = document.getElementsByTagName("#show");

const addSkils1 = document.getElementById("showSkils1");
const addSkils2 = document.getElementById("showSkils2");
const addSkils3 = document.getElementById("showSkils3");
const addSkils4 = document.getElementById("showSkils4");
const addSkils5 = document.getElementById("showSkils5");


const style1 = document.querySelector('.style1');


const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

// Navigation
let index = 0;
const kiri = document.querySelector(".kiri");
const nameProject = document.getElementById("NameProject");
const imgProject = document.getElementById("ImgProject");
const descProject = document.getElementById("DescProject");
const kanan = document.querySelector(".kanan");


function Update() {
  nameProject.innerHTML = data[index].nama;
  imgProject.src = data[index].img;
  descProject.innerHTML = data[index].desc;
}

warnaInput.addEventListener("input", () => {
  const nilaiWarna = warnaInput.value;
  document.body.style.backgroundColor = nilaiWarna;
  backgroundColor.style.backgroundColor = nilaiWarna;
});

colortext.forEach((hello) => {
  textColor.addEventListener("input", () => {
    const textnilai = textColor.value;
    hello.style.color = textnilai;
  });
});

function showClick1() {
  const show1 = document.getElementById("show1");
  const inputColor = document.getElementById("InputTextColor1");
  const checklist = document.getElementById("Checklist");

  if (show1.style.display === "none") {
    show1.style.display = "block";
    show1.style.background = "linear-gradient(darkblue, black)";
    show1.style.color = "white";
    show1.style.borderRadius = "20px";
    show1.style.width = "100%";
    show1.style.padding = "20px";
    show1.style.boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.5)";
    show1.style.textShadow = "0px 10px 10px rgba(255, 255, 255, 0.5)";
    show1.classList.add('fadeTop')
    setTimeout(() => {
      show1.classList.remove('fadeTop')
    }, 500)
    
    inputColor.addEventListener("input", () => {
      show1.style.color = inputColor.value;
      show1.style.textShadow = `0px 0px 30px ${inputColor.value}`;
    });
  } else {
    show1.style.display = "none";
  }
}

function Checklist() {
  const showlist = document.querySelector(".body");
  showlist.classList.toggle("checklist");
}

function Checklist2() {
  const showlist = document.querySelector(".body2");
  showlist.classList.toggle("checklist");
}

function Checklist3() {
  const showlist = document.querySelector(".body3");
  showlist.classList.toggle("checklist");
}

function showClick2() {
  const show2 = document.getElementById("show2");
  const inputColor = document.getElementById("InputTextColor2");

  if (show2.style.display === "none") {
    show2.style.display = "block";
    show2.style.background = "linear-gradient(darkblue, black)";
    show2.style.color = "white";
    show2.style.borderRadius = "20px";
    show2.style.padding = "20px";
    show2.style.width = "100%";
    show2.style.boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.5)";
    show2.style.textShadow = "0px 10px 10px rgba(255, 255, 255, 0.5)";
    show2.classList.add('fadeTop')
    setTimeout(() => {
      show2.classList.remove('fadeTop')
    }, 500)

    inputColor.addEventListener("input", () => {
      show2.style.color = inputColor.value;
      show2.style.textShadow = `0px 0px 30px ${inputColor.value}`;
    });
  } else {
    show2.style.display = "none";
  }
}

function showClick3() {
  const show3 = document.getElementById("show3");
  const inputColor = document.getElementById("InputTextColor3");

  if (show3.style.display === "none") {
    show3.style.display = "block";
    show3.style.background = "linear-gradient(darkblue, black)";
    show3.style.color = "white";
    show3.style.borderRadius = "20px";
    show3.style.padding = "20px";
    show3.style.width = "100%";
    show3.style.boxShadow = "0px 10px 10px rgba(0, 0, 0, 0.5)";
    show3.style.textShadow = "0px 10px 10px rgba(255, 255, 255, 0.5)";
    show3.classList.add('fadeTop')
    setTimeout(() => {
      show3.classList.remove('fadeTop')
    }, 500)


    inputColor.addEventListener("input", () => {
      show3.style.color = inputColor.value;
      show3.style.textShadow = `0px 0px 30px ${inputColor.value}`;
    });
  } else {
    show3.style.display = "none";
  }
}

function tampilkanBakat1() {
  if (addSkils1.style.display === "none") {
    addSkils1.style.display = "block";
  } else {
    addSkils1.style.display = "none";
  }
}

function tampilkanBakat1() {
  if (addSkils1.style.display === "none") {
    addSkils1.style.display = "block";
  } else {
    addSkils1.style.display = "none";
  }
}

function tampilkanBakat2() {
  if (addSkils2.style.display === "none") {
    addSkils2.style.display = "block";
  } else {
    addSkils2.style.display = "none";
  }
}

function tampilkanBakat3() {
  if (addSkils3.style.display === "none") {
    addSkils3.style.display = "block";
  } else {
    addSkils3.style.display = "none";
  }
}

function tampilkanBakat4() {
  if (addSkils4.style.display === "none") {
    addSkils4.style.display = "block";
  } else {
    addSkils4.style.display = "none";
  }
}

function tampilkanBakat5() {
  if (addSkils5.style.display === "none") {
    addSkils5.style.display = "block";
  } else {
    addSkils5.style.display = "none";
  }
}

kiri.addEventListener("click", (e) => {
  e.preventDefault();
  index = (index + 1) % data.length;
  Update();
});

kanan.addEventListener("click", (e) => {
  e.preventDefault();
  index = (index - 1 + data.length) % data.length;
  Update();
});

like.addEventListener("click", (e) => {
  if (e.button === 0) {
    like.style.display = "none";
    dislike.style.display = "none";
  }

  setTimeout(() => {
    alert("Ok terimakasih pujiannya semoga menjadi lebih baik lagi");
  }, 1000);
});

dislike.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.button === 0) {
    like.style.display = "none";
    dislike.style.display = "none";
  }

  setTimeout(() => {
    alert(
      "Ok terimakasih kritikan semoga bisa diperbaiki dan mencoba lebih baik lagi"
    );
  }, 1000);
});

colortext.forEach((hello) => console.log(hello));
