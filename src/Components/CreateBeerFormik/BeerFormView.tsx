import React from "react";
import { Form as FormikForm, FormikProps, Field } from "formik";
import BeerEntity from "../../models/BeerEntity";

interface Props { 
  beerTypes: string[];
  formik: FormikProps<BeerEntity>;
}

function BeerFormView(props: Props) {
  return (
    <FormikForm>      
      <label id="idLabelName" htmlFor="idBeerName">
        Beer Name:
      </label>
      <Field
        type="text"
        id="idBeerName"
        name="beerName"
        placeholder="Beer Name"
      />
      {props.formik.errors.beerName && props.formik.touched.beerName ? (
        <div>{props.formik.errors.beerName}</div>
      ) : null}

      <br />
      <label id="idLabelBeerType" htmlFor="idBeerType">
        Beer Type:
      </label>
      <Field id="idBeerType" name="beerType" component="select">
        {props.beerTypes.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </Field>
      {props.formik.errors.beerType && props.formik.touched.beerType ? (
        <div>{props.formik.errors.beerType}</div>
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
      {props.formik.errors.ingredients && props.formik.touched.ingredients ? (
        <div>{props.formik.errors.ingredients}</div>
      ) : null}
      <br />

      <button type="submit" id="idSubmit">Submit</button>
    </FormikForm>
  );
}

export default BeerFormView;