const doctorGroupImage = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791464562/doctor-happy-group3_l2cswq.png";
const doctorOtImage = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791458638/doctor-ot_g18dze.jpg";
const doctorImage1 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791458640/doctor1_c3whae.jpg";
const doctorImage2 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791458640/doctor8_cyzb3c.jpg";
const doctorImage3 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791458639/doctor3_g1nwls.jpg";
const doctorImage4 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791467665/doctor4_diwkyi.jpg";
const doctorImage5 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791458638/doctor5_aaaypc.jpg";
const reviewImage1 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1780300843/web-profile-2_ibh7lm.png";
const healthTipsImage1 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791466584/health-habit_vmwmnt.jpg";
const healthTipsImage2 = "https://res.cloudinary.com/dxr5inpsy/image/upload/v1791466712/health-habit2_dhsiws.jpg";

export const images = {
  hero: doctorGroupImage,
  hospital: doctorGroupImage,
  stethoscope: doctorGroupImage,
  avatar: reviewImage1,
  ot: doctorOtImage,
};

export const departments = [
  "General Medicine", "Cardiology", "Neurology", "Orthopedics",
  "Pediatrics", "Women's Health", "Emergency Care", "Laboratory Tests",
];

export const doctors = [
  { name: "Dr. Maruf Ahmed", specialty: "Cardiologist", department: "Cardiology", photo: doctorImage1 },
  { name: "Dr. Priya Sharma", specialty: "Pediatrician", department: "Pediatrics", photo: doctorImage3 },
  { name: "Dr. Sadikur Rahman", specialty: "Neurologist", department: "Neurology", photo: doctorImage2 },
  { name: "Dr. Najmul Huda", specialty: "Orthopedic Surgeon", department: "Orthopedics", photo: doctorImage4 },
];

export const posts = [
  { title: "7 daily habits that protect your heart", category: "Health Tips", date: "Sep 24, 2026", image: healthTipsImage1 },
  { title: "What to expect during your first health check-up", category: "Health Tips", date: "Sep 12, 2026", image: doctorImage5 },
  { title: "Eating well during monsoon: a simple guide", category: "Health Tips", date: "Aug 30, 2026", image: healthTipsImage2 },
];
