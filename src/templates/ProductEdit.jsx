import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../components/UIkit/PrimaryButton";
import ImageArea from "../components/UIkit/product/ImageArea";
import SelectBox from "../components/UIkit/SelectBox";
import TextInput from "../components/UIkit/TextInput";
import { saveProduct } from "../reducks/products/operations";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [price, setPrice] = useState(""),
    [images, setImages] = useState([]);

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputDescription = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  const categories = [
    { id: "tops", name: "TOPS" },
    { id: "shirts", name: "SHIRTS" },
    { id: "pants", name: "PANTS" },
  ];

  const genders = [
    { id: "all", name: "ALL" },
    { id: "male", name: "MALE" },
    { id: "female", name: "FEMALE" },
  ];

  return (
    <section>
      <h2 className="u-text__headline u-text-center">
        Register and Edit the products
      </h2>
      <div className="c-section-container">
        <ImageArea images={images} setImages={setImages} />
        <TextInput
          fullWidth={true}
          label={"Product Name"}
          multiline={false}
          required={true}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
        />
        <TextInput
          fullWidth={true}
          label={"Product Description"}
          multiline={true}
          required={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />
        <TextInput
          fullWidth={true}
          label={"Product Price"}
          multiline={false}
          required={true}
          rows={1}
          value={price}
          type={"number"}
          onChange={inputPrice}
        />
        <SelectBox
          label={"Category"}
          required={true}
          value={category}
          select={setCategory}
          options={categories}
          // onChange={}
        />
        <SelectBox
          label={"Gender"}
          required={true}
          value={gender}
          select={setGender}
          options={genders}
          // onChange={}
        />
      </div>
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label={"Register the info about the products"}
          onClick={() =>
            dispatch(
              saveProduct(name, description, gender, category, price, images)
            )
          }
        />
      </div>
    </section>
  );
};

export default ProductEdit;
