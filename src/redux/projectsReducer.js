import { createSlice } from "@reduxjs/toolkit";
import aboutCompany1 from "../assets/about-company-1.jpeg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-5.jpeg";
import project6 from "../assets/project-6.jpeg";
const initialState = {
  projects: [
    {
      name: ["Jannet masr ElSheikh Zayed", "جنة مصر بالشيخ زايد"],
      image: aboutCompany1,
    },
    {
      name: [
        "AlEskan ALEgtmaey ElSheikh Zayed",
        "الإسكان الإجتماعي بالشيخ زايد",
      ],
      image: project2,
    },
    { name: ["Swary Alex", "صواري بالإسكندرية"], image: project3 },
    {
      name: [
        "Mogamaa AlSenaat ElSheikh Zayed",
        "مجمع الصناعات بالعاشر من رمضان",
      ],
      image: project4,
    },
    {
      name: ["Alnil Schools ElSheikh Zayed", "مدارس النيل بالشيخ زايد"],
      image: project5,
    },
    { name: ["Youth Center AlSadat", "مركز شباب السادات"], image: project6 },
  ],
  currentIndex: 0,
};

const projectsSlicer = createSlice({
  name: "projectsReduser",
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setCurrentIndex } = projectsSlicer.actions;
export default projectsSlicer.reducer;
