import React from "react";
import { Formik, FormikActions, FormikProps } from "formik";
import BeerEntity from "../../models/BeerEntity";
import * as Yup from "yup";
import BeerFormView from "./BeerFormView";

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

function CreateBeerFormikForm(props: Props) {
  const beersTypes = ["", "Larger", "Ale", "Stout", "Malt"];
  const onSubmit = (values: BeerEntity, actions: FormikActions<BeerEntity>) => {
    props.onSubmit(values);
    actions.setSubmitting(false);
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
      render={(propsFormik: FormikProps<BeerEntity>) => 
      {
        let props = {
          beerTypes: beersTypes,
          formik: propsFormik
        };
        return BeerFormView(props);
      }}
    />
  );
}

export default CreateBeerFormikForm;
