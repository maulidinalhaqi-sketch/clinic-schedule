// Data simulasi untuk demo GitHub Pages.
// Seluruh nama dokter, klinik, dan jadwal di file ini adalah data fiktif.
const DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const SLOTS = [{s:540,e:900,l:'Shift 1',t:'09:00-15:00'},{s:900,e:1260,l:'Shift 2',t:'15:00-21:00'}];
const CLINIC_NAMES = [
  'Klinik Jakarta Pusat','Klinik Jakarta Selatan','Klinik Jakarta Barat',
  'Klinik Jakarta Timur','Klinik Jakarta Utara','Klinik Bandung',
  'Klinik Bali','Klinik Surabaya','Klinik Yogyakarta','Klinik Semarang'
];
const DENTISTS = [
  {name:'drg. Aditya Pratama, Sp.Pros', title:'Sp', color:'#A64D79'},
  {name:'drg. Nadia Putri, Sp.Perio', title:'Sp', color:'#D9EAD3'},
  {name:'drg. Bima Saputra, Sp.Pros', title:'Sp', color:'#F1C232'},
  {name:'drg. Citra Maharani, Sp.Perio', title:'Sp', color:'#E6B8AF'},
  {name:'drg. Dimas Kurniawan, Sp.BM', title:'Sp', color:'#073763'},
  {name:'drg. Hana Lestari, Sp.Pros', title:'Sp', color:'#6AA84F'},
  {name:'drg. Rafi Mahendra, GP', title:'GP', color:'#FFFFFF'},
  {name:'drg. Salsabila Putri, GP', title:'GP', color:'#FFFFFF'},
  {name:'drg. Kevin Wijaya, Sp.Perio', title:'Sp', color:'#45818E'},
  {name:'drg. Maya Anggraini, Sp.Pros', title:'Sp', color:'#CC0000'},
  {name:'drg. Farhan Akbar, GP', title:'GP', color:'#FFFFFF'},
  {name:'drg. Intan Permata, Sp.BM', title:'Sp', color:'#674EA7'}
];
const DEMO_DATA = [];
CLINIC_NAMES.forEach((clinic, ci) => {
  const duCount = ci % 3 === 0 ? 4 : (ci % 3 === 1 ? 3 : 5);
  for (let du=1; du<=duCount; du++) {
    DAYS.forEach((day, di) => {
      // Minggu umumnya tutup; beberapa klinik tetap memiliki jadwal.
      if (day === 'Sunday' && ci % 3 !== 1) return;
      SLOTS.forEach((slot, si) => {
        // Sebagian slot kosong untuk menampilkan occupancy yang bervariasi.
        if ((ci*3 + du*5 + di*2 + si) % 7 === 0) return;
        const idx = (ci*2 + du*3 + di + si*4) % DENTISTS.length;
        const d = DENTISTS[idx];
        const trial = (ci + du + di + si) % 17 === 0;
        DEMO_DATA.push({
          clinic, duNo: du, duKey: `DU ${du}`, duText: `DU ${du}`,
          dentist: d.name, title: d.title, color: d.color,
          day, start: slot.s, end: slot.e, trial,
          conflict: (ci === 1 && du === 2 && day === 'Wednesday' && si === 0) ||
                    (ci === 1 && du === 3 && day === 'Wednesday' && si === 0)
        });
      });
    });
  }
});
const CLINICS = CLINIC_NAMES;
const DENTIST_NAMES = [...new Set(DEMO_DATA.map(r => r.dentist))].sort((a,b)=>a.localeCompare(b,'id'));
