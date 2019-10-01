import React from "react";
import {
  Formik,
  Form as FormikForm,
  FormikActions,
  FormikProps,
  Field
} from "formik";
import BeerEntity from "./BeerEntity";
import * as Yup from "yup";

interface Props {
  onSubmit: (data: BeerEntity) => void;
}

const beerFormSchema = Yup.object().shape({
  beerName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  beerType: Yup.string()
    .min(3, "Too Short!")
    .max(6, "Too Long!")
    .required("Required"),
  hasCorn: Yup.boolean().required("Required"),
  ingredients: Yup.string()
    .min(5)
    .max(200)
    .required("Required")
});

const validate = (values: BeerEntity): void => {
  console.log("validate");
};

function CreateBeerFormikForm(props: Props) {
  const beersTypes = ["", "Larger", "Ale", "Stout", "Malt"];
  const onSubmit = (values: BeerEntity, actions: FormikActions<BeerEntity>) => {
    props.onSubmit(values);
    actions.setSubmitting(false);
  };
  const renderHtml = (propsFormik: FormikProps<BeerEntity>) => {
    return (
      <FormikForm>
        <h1>Teste</h1>
        <label id="idLabelName" htmlFor="idBeerName">
          Beer Name:
        </label>
        <Field
          type="text"
          id="idBeerName"
          name="beerName"
          placeholder="Beer Name"
        />
        {propsFormik.errors.beerName && propsFormik.touched.beerName ? (
          <div>{propsFormik.errors.beerName}</div>
        ) : null}

        <br />
        <label id="idLabelBeerType" htmlFor="idBeerType">
          Beer Type:
        </label>
        <Field id="idBeerType" name="beerType" component="select">
          {beersTypes.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Field>
        {propsFormik.errors.beerType && propsFormik.touched.beerType ? (
          <div>{propsFormik.errors.beerType}</div>
        ) : null}
        <br />
        <label id="idHasCornLabel" htmlFor="idHasCorn">
          Has corn:{" "}
        </label>
        <Field id="idHasCorn" name="hasCorn" type="checkbox" />

        <br />
        <label id="idLabelIdIngredients" htmlFor="idIngredients">
          Ingredients:{" "}
        </label>
        <Field
          component="textarea"
          rows="4"
          id="idIngredients"
          name="ingredients"
        />
        {propsFormik.errors.ingredients && propsFormik.touched.ingredients ? (
          <div>{propsFormik.errors.ingredients}</div>
        ) : null}
        <br />

        <button type="submit">Submit</button>
      </FormikForm>
    );
  };

  return (
    <Formik
      initialValues={{
        beerName: "",
        beerType: "",
        hasCorn: false,
        ingredients: ""
      }}
      onSubmit={onSubmit}
      validationSchema={beerFormSchema}
      render={renderHtml}
    />
  );
}

export default CreateBeerFormikForm;
