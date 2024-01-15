// import React, { useRef } from "react";
// import { CardMedia, IconButton } from "@mui/material";
// import editIcon from "../../../assets/icons/edit.svg";

// export default function AnnouncmentPageCard({
//   announcments,
//   image,
//   index,
// }) {
//   const dragPerson = useRef();
//   const dragOverPerson = useRef();
//   const onEditClick = () => {
//     console.log("edit");
//   };

//   const handleSort = () => {
//     const newAnn = [...announcments];
//     console.log(dragPerson.current);
//     console.log(dragOverPerson.current); // console.log(newAnn);
//   };
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "215px",
//         position: "relative",
//         borderRadius: "10px",
//         overflow: "hidden",
//         marginBottom: "10px",
//         display: "flex",
//       }}
//       draggable={true}
//       onDragStart={() => (dragPerson.current = index)}
//       onDragEnter={() => (dragOverPerson.current = index)}
//       onDragEnd={handleSort}
//       onDragOver={(e) => e.preventDefault()}
//       className="special-news-card"
//     >
//       <CardMedia
//         component={"img"}
//         sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//         image={image}
//       />
//       <div
//         style={{
//           position: "absolute",
//           inset: "0",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#383C404D",
//           backdropFilter: "blur(3px)",
//           opacity: 0,
//           transition: "0.3s",
//         }}
//         className="card-layer"
//       >
//         <IconButton onClick={onEditClick}>
//           <CardMedia
//             component={"i"}
//             sx={{
//               width: "24px",
//               height: "24px",
//               backgroundImage: "contain",
//             }}
//             image={editIcon}
//           />
//         </IconButton>
//       </div>
//     </div>
//   );
// }
