import { Box, Image, Text } from "@chakra-ui/react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styles from "./StoryTellersP3.module.css";
import person from "./Images/person.png";
import fileImg from "./Images/fileImg.png";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "../../../utils/baseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StoryTellersP3() {
  const navigateTo = useNavigate();
  const h1Ref = useRef(null);
  const h1Ref2 = useRef(null);
  var [file, setFile] = useState(null);
  var [selectedOption, setSelectedOption] = useState("audio");

  var { activeCategory, storyTitle,setStoryTitle,setActiveCategory } = useContext(AuthContext);
  console.log({ activeCategory, storyTitle });
  console.log(selectedOption,"ooii");

  if(selectedOption == "audio"){
    var handleFileSelect = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile && isValidFileType(selectedFile) ) {
        setFile(selectedFile);
      } else {
        toast.error("Please select a Valid file type");
        // Clear the file input
        e.target.value = null;
      }
    };

    var isValidFileType = (file) => {
      var acceptedTypes = [
        "audio/mpeg",
        "audio/wav",
        "audio/mp3"
      ];
      return acceptedTypes.includes(file.type);
    };
  }else if(selectedOption=="video"){


    var handleFileSelectVideo = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile &&  isValidFileTypeVideo(selectedFile)) {
        setFile(selectedFile);
      } else {
        toast.error("Please select a Valid file type");
        // Clear the file input
        e.target.value = null;
      }
    };
    var isValidFileTypeVideo = (file) => {
      var acceptedTypes = [
        "video/mp4",
        "video/mpeg",
      ];
      return acceptedTypes.includes(file.type);
    };
  }




  const handleDragOver = (e) => {
    e.preventDefault();
  };


  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setFile(null)
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (isValidFileType(droppedFile) || isValidFileTypeVideo(droppedFile))) {
      setFile(droppedFile);
    } else {
      toast.error("Please select valid file type");
    }
  };





  useEffect(() => {
    const spanText = (text) => {
      let string = text.innerText;
      let spanned = "";
      for (let i = 0; i < string.length; i++) {
        if (string.substring(i, i + 1) === " ")
          spanned += string.substring(i, i + 1);
        else spanned += "<span>" + string.substring(i, i + 1) + "</span>";
      }
      text.innerHTML = spanned;

      let animations = text.querySelectorAll("span");
      animations.forEach((letter, i) => {
        letter.style.animationDelay = i * 0.1 + "s";
      });
    };

    if (h1Ref.current) {
      spanText(h1Ref.current);
    }
    if (h1Ref2.current) {
      spanText(h1Ref2.current);
    }
  }, []);

  var handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }
    //working
    console.log(file, "this is selected file....");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", activeCategory);
    formData.append("title", storyTitle);

    // const response = await axios.post("/story_teller", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
    // console.log(response.status, ".....................>>");
    // if (response.status == 200) {
    //   toast.success("successfully added your story");
    // } else {
    //   toast.error("something went wrong!!please try again later");
    // }
var response = 200;
if (response == 200) {
  toast.success("successfully added your story");
} else {
  toast.error("something went wrong!!please try again later");
}
    setFile(null);
    setStoryTitle("");
    setActiveCategory("Select Category");
    navigateTo("/submitted");
  };
  return (
    <>
      <Box>
        <div className={styles.breadcrumbs}>
          <FaArrowLeftLong size={15} />
          <p onClick={() => navigateTo("/")}>Back to Homepage</p>
          <p></p>
        </div>
        <div className={styles.section1}>
          <p>
            Get your stories featured on Story Club in just <span>Rs 49</span>
          </p>
        </div>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          p={"1rem"}
          gap={"1rem"}
          //   border={"1px solid black"}
          w={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }}
          m={"auto"}
        >
          <Box
            // border={"1px solid black"}
            p={"1rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={{ base: "1rem", md: "1rem", lg: "2rem", xl: "2rem" }}
            m={"auto"}
            mt={0}
          >
            <h1 ref={h1Ref} className={styles.animation}>
              Let the World Listen!
            </h1>
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              <p style={{ color: "red" }}>-</p>
              <p>-----</p>
              <p style={{ color: "red" }}>-</p>
            </div>
            <Text fontSize={"1.5rem"}>Publish your Story</Text>
            {/* <Box
              className={styles.box}
              h={"6rem"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <b>
                <i style={{ fontSize: "0.6rem" }}>Let the story begin...</i>
              </b>

              <Text color={"gray"} fontSize={"0.8rem"} textAlign={"end"}>
                just one step
              </Text>
            </Box> */}
            <RadioGroup defaultValue="audio"  onChange={(value) => handleOptionChange(value)}>
              <Stack spacing={5} direction="row">
                <Radio checked colorScheme="red" value="audio" >
                  Audio
                </Radio>
                <Radio colorScheme="red" value="video">
                  Video
                </Radio>
              </Stack>
            </RadioGroup>

            {selectedOption == "audio" ? (
              <Box
              className={styles.box}
              p={4}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Image src={fileImg} alt="file" />
              {/* {file && (
                <Text fontSize={"1.3rem"}>Selected File: {file.name}</Text>
              )} */}
              {!file && (
                <Text fontSize={"1.3rem"}>
                  Choose audio file
                </Text>
              )}
              <input
                type="file"
                onChange={handleFileSelect}
                accept=".mp3,.wav,.mpeg"
              />
            </Box>
            ):(
              <Box
              className={styles.box}
              p={4}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <Image src={fileImg} alt="file" />
            
              {!file && (
                <Text fontSize={"1.3rem"}>
                  Choose Video file
                  {/* Drag & Drop a file here or click to select */}
                </Text>
              )}
              <input
                type="file"
                onChange={handleFileSelectVideo}
                accept=".mp4,.avi"              />
            </Box>
            )}

            
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text>03/03</Text>
              <MdDownloadDone
                size={25}
                style={{
                  backgroundColor: "#f7ded5",
                  border: "1px solid black",
                  borderRadius: "50%",
                  padding: "0.2rem",
                  display: file ? "block" : "none",
                }}
              />
            </Box>
            <Box
              display={"flex"}
              gap={"1rem"}
              w={"100%"}
              //   border={"1px solid black"}
            >
              <button
                className={styles.btn}
                onClick={() => navigateTo("/storyTellers/page2")}
              >
                Go back
              </button>
              <button className={styles.btn} onClick={handleSubmit}>
                Add Story
              </button>
            </Box>
          </Box>
          <Box
            //   border={"1px solid black"}
            m={"auto"}
            mt={0}
            p={"1rem"}
          >
            <Image src={person} alt="person" w={"80%"} m={"auto"} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
