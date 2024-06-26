export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg";

// export const API_OPTIONS = {
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzg1ZDE0Y2RlZTU1OGVjNGQxNTI5N2M1NTBkZjQzMCIsInN1YiI6IjY1M2E0ODJlZWM0NTUyMDE0ZDZlYzg4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q7WjaVu4OMMc48xhjX-pj0Suw1ugoRkKcm0-IC9D1Fg",
//     accept: "application/json",
//   },
// };

export const API_OPTIONS = {
  headers: {
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_API_KEY,
    Accept: "application/json"
  }
};


export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500";


export const GPT_LOGO = 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH-MZs-QTuhsriguhrUoL1ONNGKumv_nOJSvQDm-KXw&s";

export const GO_BACK =
"https://static-00.iconduck.com/assets.00/chevron-with-circle-left-icon-256x256-e5stwi8c.png";
export const bg_IMG =
//"https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
"https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const poster_path_Not_found =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PgItrmj9SWhclDBAmjlyFsC4w9tEKTcvDTbc2puQtQ&s";

export const OPENAI_API_KEY =process.env.REACT_APP_OPENAI_API_KEY;
//"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";
export const SUPPORTED_LANGUAGE = [
  {identifier: "en", name: "English"},
  {identifier: "hi", name: "Hindi"},
  {identifier: "sp", name: "Spanish"},
];