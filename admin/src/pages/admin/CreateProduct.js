import Wrapper from "../../assets/wrappers/CreateProduct";
import placeholder from "../../assets/images/placeholder-image.png";
import { FormRow, Logo, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toggle/style.css";
import Toggle from "react-toggle";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect, useRef } from "react";

import FileBase64 from "react-file-base64";
import ColorWidget from "../../components/ColorWidget";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { DISPLAY_ALERT } from "../../context/action";

const CreateProduct = () => {
  const editor = useRef();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };
  const [image, setImage] = useState([]);

  const { isLoading, showAlert, createProduct, displayAlert } = useAppContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [colors, setColors] = useState([]);
  const [variants, setVariants] = useState([]);
  const [Addons, setAddons] = useState([]);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleUploadImage = (files) => {
    const collection = [];
    files.forEach((file) => {
      console.log(file);
      collection.push(file.base64);
    });
    setImages([...images, ...collection]);
  };
  const handleCategories = (e) => {
    if (e.key === "Enter") {
      alert(e.target.value);
      setCategories([...categories, e.target.value]);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
      quantity,
      images,
      description,
      categories,
      isVisible,
    };
    createProduct(product);
    displayAlert();
  };

  ////////////////////////////////////////////////////remove  later
  useEffect(() => {
    setColors([
      { name: "red", color: "#FF0000" },
      { name: "blue", color: "#0000FF" },
    ]);
  }, []);
  return (
    <>
      <div className="nav-header">
        <a href="/admin/dashboard">
          <button className="btn">back</button>
        </a>
        {showAlert && <Alert />}
        <button onClick={onSubmit} className="btn">
          {isLoading ? "...Loading" : "Create Product"}
        </button>
      </div>

      <Wrapper>
        <div className="header">
          <span>This block will not be visible too the user</span>
          <div>
            <span>Quantity:</span>
            <input
              type="number"
              min="0"
              max="1000000"
              name="quantity"
              placeholder="quantity"
              className="quantity-input"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="toggle-container">
            <span>Is Visible?</span>
            <Toggle
              defaultChecked={isVisible}
              onChange={() => {
                setIsVisible(!isVisible);
              }}
            />
          </div>
        </div>
        <div className="main">
          <div>
            <Carousel showThumbs={true} infiniteLoop={true}>
              {images.map((image, idx) => {
                return (
                  <div className="holder" key={idx}>
                    <img className="carousel-image" src={image} alt="product" />
                  </div>
                );
              })}

              <div
                className="holder"
                key={images.length}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <img
                  className="carousel-image"
                  src={placeholder}
                  alt="product"
                />
              </div>
            </Carousel>
          </div>
          <div>
            <form>
              <FormRow
                type="text"
                name="name"
                labelText="Product Name"
                placeholder="Enter Product Name"
                className="name-input"
                handleChange={(e) => setName(e.target.value)}
                hideLabel={true}
              />
              <FormRow
                type="number"
                min="0"
                max="1000000"
                name="price"
                placeholder="Enter Price"
                labelText="Price($xx.xx)"
                className="price-input"
                handleChange={(e) => setPrice(e.target.value)}
                hideLabel={true}
                prefix="$"
              />
              <div>
                <span>Colors:</span>
                <ColorWidget colors={colors} />
              </div>
              <div>
                <span>Variants:</span>
              </div>
              <div>
                <span>Addons:</span>
              </div>
              <button className="btn btn-block" disabled>
                Add to Shopping Cart
              </button>
              <SunEditor
                onChange={(content) => {
                  setDescription(content);
                }}
                getSunEditorInstance={getSunEditorInstance}
                placeholder="Description"
                setOptions={{
                  buttonList: [
                    ["fontSize", "formatBlock"],
                    ["bold", "underline", "italic", "strike"],
                    ["fontColor"],
                    ["align", "horizontalRule", "list", "lineHeight"],
                    ["table", "link", "image" /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
                    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
                    ["showBlocks", "codeView"],
                  ],
                }}
              />
            </form>
          </div>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <FormRow
            type="text"
            name="categories"
            labelText="Categories"
            placeholder="Categories"
            className="category-input"
            onKeyPress={handleCategories}
          />
        </form>
      </Wrapper>
    </>
  );
};
export default CreateProduct;
