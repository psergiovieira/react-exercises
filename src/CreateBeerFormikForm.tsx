import React from "react";
import {
  Formik,
  Form as FormikForm,
  FormikActions,
  FormikProps,
  Field
} from "formik";
import BeerEntity from "./BeerEntity";

interface Props {
  onSubmit: (data: BeerEntity) => void;
}

const validate = (values: BeerEntity): void => {
  console.log("validate");
};

function CreateBeerFormikForm(props: Props) {
  const beersTypes = ["Larger", "Ale", "Stout", "Malt"];
  const onSubmit = (values: BeerEntity, actions: FormikActions<BeerEntity>) => {
    props.onSubmit(values);
    actions.setSubmitting(false);
  };
  const renderHtml = (propsFormik: FormikProps<BeerEntity>) => {
    return (
      <FormikForm>
        <h1>Teste</h1>
        <label id="idLabelName" htmlFor="idNameBeer">
          Beer Name:
        </label>
        <Field
          type="text"
          id="idNameBeer"
          name="nameBeer"
          placeholder="Beer Name"
        />

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

        <br />
        <label id="idHasCornLabel" htmlFor="idHasCorn">
          Has corn:{" "}
        </label>
        <Field id="idHasCorn" name="hasCorn" type="checkbox" />

        <br />
        <label id="idLabelIdIngredients" htmlFor="idIngredients">
          {" "}
          Ingredients:{" "}
        </label>
        <Field  component="textarea" rows="4" id="idIngredients" name="ingredients" />

        <br />
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
      validate={validate}
      render={renderHtml}
    />
  );
}

export default CreateBeerFormikForm;
