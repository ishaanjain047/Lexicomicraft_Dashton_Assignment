import React from 'react'
import PanelInput from '../PanelInput';
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from "uuid";
const PanelGenerator = ({
  panels,
  setPanels,
}) => {
  const navigate = useNavigate();
  const generateComic = () => {
    let cnt = 0;
    console.log("panels is ", panels);
    panels.map((panel) => {
      if (
        panel.imgsrc !== null &&
        panel.imgsrc !== undefined &&
        panel.imgsrc !== ""
      ) {
        cnt++;
      }
    });
    console.log("cnt is ", cnt);
    if (cnt < 10) {
      alert("Atleast 10 panels should be created");
      return;
    }
    navigate("/comic");
  };

  const generate = async (textval, id) => {
    if(textval===""){
      alert("Input is empty");
      return;
    }
    const obj = { inputs: `${textval}` };
       setPanels((current) =>
         current.map((panel) => {
           if (panel.id === id) {
             return { ...panel, desc: textval, loading: true };
           }
           return panel;
         })
       );
    try{
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(obj),
        }
      );
      const result = await response.blob();
      let url = URL.createObjectURL(result);
      console.log("url is ",url);
      setPanels((current) =>
        current.map((panel) => {
          if (panel.id === id) {
            return { ...panel, desc: textval, imgsrc: url, loading: false };
          }
          return panel;
        })
      );
    }
    catch(error){
      setPanels((current) =>
        current.map((panel) => {
          if (panel.id === id) {
            return { ...panel, loading: false };
          }
          return panel;
        })
      );
      console.error('Error:', error);
      alert("The API is currently not responding ! Kindly try later");
    }
  };

  const deletePanel = (panelId) => {
    setPanels((prevPanels) =>
      prevPanels.filter((panel) => panel.id !== panelId)
    );
  };

   const handleTextChange = (e, panelId) => {
     const updatedPanels = panels.map((panel) => {
       if (panel.id === panelId) {
         return { ...panel, desc: e.target.value };
       }
       return panel;
     });

     setPanels(updatedPanels);
   };

  const addPanel = () => {
    setPanels((s) => {
      const unique_id = uuid();
      const newObj = {
        id: unique_id,
        desc: "",
        imgsrc: "",
        loading:false
      };
      return [...s, newObj];
    });
  };
  return (
    <div className="panelGeneratorWrapper">
      <div className="panelInputs">
        {panels.map((item, key) => {
          console.log("item is ", item);
          return (
            <div className="addedPanel" key={key}>
              <PanelInput
                loading={item.loading}
                desc={item.desc}
                imagesrc={item.imgsrc}
                handleTextChange={(e) => handleTextChange(e, item.id)}
                generate={() => generate(item.desc, item.id)}
                deletePanel={() => deletePanel(item.id)}
              ></PanelInput>
            </div>
          );
        })}
      </div>
      <div className="addAndSubmit">
        <div className="addMoreBtnCon">
          <button className="addMoreBtn Btn" onClick={addPanel}>
            Add More Panels
          </button>
        </div>
        <div className="submitButton">
          <button className="finalGenerateBtn Btn" onClick={generateComic}>
            Generate Comic !
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelGenerator