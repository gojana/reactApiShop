import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import requestAPI from '../../../../helpers/requestCalls';
import ButtonCommon from '../../../buttons/buttonCommon';
import FormSelect from '../../../forms/formSelect';
import FormInput from '../../../forms/formInput';
import FormTextArea from '../../../forms/formTextArea';

const AddProduct = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  //const [btnActive, setBtnActive] = useState(false);

  const nameInput = useRef();
  const typeSelect = useRef();
  const seasonSelect = useRef();
  const growthTimeInput = useRef();
  const textAreaInput = useRef();
  const priceInput = useRef();
  const stockInput = useRef();

  const dispatch = useDispatch();

  const addProductRequest = async () => {
    const body = {
      name: nameInput.current.value,
      type: typeSelect.current.value,
      characteristics: [
        seasonSelect.current.value,
        growthTimeInput.current.value,
        textAreaInput.current.value,
      ],
      stock: stockInput.current.value,
      price: priceInput.current.value,
      images: ['noImg.png'],
    };

    try {
      setIsLoading(true);
      const response = await requestAPI(`products/`, 'POST', body);
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      props.update(true);
      props.cancel();
      dispatch(
        notificationActions.showNotification({
          message: `${response.message}`,
          type: 'alert-success',
        })
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `${err}`,
          type: 'alert-error',
        })
      );
    }
  };

  return (
    <div className="p-8 rounded border border-primary lg:mt-0  md:lg-5 md:mt-0 sm:mt-5 sm:ml-0 ">
      <h1 className="font-medium text-3xl text-white">
        Datos de Producto a Agregar
      </h1>
      <form>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <FormInput
            inputName="nombre producto"
            placeHolder={``}
            refInput={nameInput}
          />
          <FormInput
            inputName="Tiempo Crecimiento"
            placeHolder={`en semanas`}
            refInput={growthTimeInput}
          />
          <FormInput inputName="Stock" placeHolder={``} refInput={stockInput} />
          <FormInput
            inputName="Precio"
            placeHolder={`en pesos`}
            refInput={priceInput}
          />
          <FormSelect
            selectName="Tipo Producto"
            selectedValue={`seleccione tipo`}
            items={['barbecho', 'almacigo', 'semilla']}
            refInput={typeSelect}
          />
          <FormSelect
            selectName="Epoca Cultivo"
            selectedValue={`seleccione epoca`}
            items={['verano', 'otoño', 'invierno', 'primavera']}
            refInput={seasonSelect}
          />

          <FormTextArea
            textAreaName="Caracteristicas Adicionales"
            characteristics={`area para caracteristicas`}
            refInput={textAreaInput}
          />
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col gap-2 mt-8">
          {isLoading ? (
            <ButtonCommon name="cargando" css={`loading`} />
          ) : (
            <ButtonCommon
              name="Crear producto"
              css={`
                sm: mb-5;
              `}
              action={addProductRequest}
            />
          )}
          <ButtonCommon name="Cancelar" action={props.cancel} />
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
