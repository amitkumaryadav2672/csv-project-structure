// import multer from "multer";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },

//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
// });

// export default upload;



import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(), // ✅ disk ki jagah memory
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB (adjust)
  },
});

export default upload;