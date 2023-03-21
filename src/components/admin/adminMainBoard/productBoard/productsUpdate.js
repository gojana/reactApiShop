import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import { requestAPIwFiles } from '../../../../helpers/requestCalls';

import ButtonCommon from '../../../buttons/buttonCommon';
import FormSelect from '../../../forms/formSelect';
import FormInput from '../../../forms/formInput';
import FormTextArea from '../../../forms/formTextArea';
import FormUploadFile from '../../../forms/formUploadFile';

const ProductsUpdate = (props) => {
  const [imgUpload, setImgUpload] = useState([]);
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

  const uploadFileHandler = (event) => {
    setImgUpload(event.target.files);
  };

  const updateProductRequest = async () => {
    const fd = new FormData();
    fd.append(
      'name',
      nameInput.current.value ? nameInput.current.value : props.data.name
    );
    fd.append(
      'type',
      typeSelect.current.value ? typeSelect.current.value : props.data.type
    );
    fd.append(
      'characteristics',
      seasonSelect.current.value
        ? seasonSelect.current.value
        : props.data.characteristics[0]
    );
    fd.append(
      'characteristics',
      growthTimeInput.current.value
        ? growthTimeInput.current.value
        : props.data.characteristics[1]
    );
    fd.append(
      'characteristics',
      textAreaInput.current.value
        ? textAreaInput.current.value
        : props.data.characteristics[2]
    );
    fd.append(
      'stock',
      stockInput.current.value ? stockInput.current.value : props.data.stock
    );
    fd.append(
      'price',
      priceInput.current.value ? priceInput.current.value : props.data.price
    );
    fd.append('images', imgUpload[0]);
    fd.append('images', imgUpload[1]);
    fd.append('images', imgUpload[2]);
    fd.append('images', imgUpload[3]);

    try {
      setIsLoading(true);
      const response = await requestAPIwFiles(
        `products/id/${props.data._id}`,
        'PATCH',
        fd
      );
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

  const updateProductHandler = async () => {
    await updateProductRequest();
  };

  return (
    <div className="p-8 rounded border border-primary lg:mt-0  md:lg-5 md:mt-0 sm:mt-5 sm:ml-0 ">
      <h1 className="font-medium text-3xl text-white">
        Datos de Producto a modificar
      </h1>
      <form>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <FormInput
            inputName="nombre producto"
            placeHolder={`${props.data.name}`}
            refInput={nameInput}
          />
          <FormInput
            inputName="Tiempo Crecimiento"
            placeHolder={`${props.data.characteristics[1]}`}
            refInput={growthTimeInput}
          />
          <FormInput
            inputName="Stock"
            placeHolder={`${props.data.stock}`}
            refInput={stockInput}
          />
          <FormInput
            inputName="Precio"
            placeHolder={`${props.data.price}`}
            refInput={priceInput}
          />
          <FormSelect
            selectName="Tipo Producto"
            selectedValue={props.data.type}
            items={['barbecho', 'almacigo', 'semilla']}
            refInput={typeSelect}
          />
          <FormSelect
            selectName="Epoca Cultivo"
            selectedValue={props.data.characteristics[0]}
            items={['verano', 'otoño', 'invierno', 'primavera']}
            refInput={seasonSelect}
          />

          <FormTextArea
            textAreaName="Caracteristicas Adicionales"
            characteristics={props.data.characteristics[2]}
            refInput={textAreaInput}
          />
          <FormUploadFile
            uploadName="suba fotos del Producto MAXIMO 4"
            action={uploadFileHandler}
          />
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col gap-2 mt-8">
          {isLoading ? (
            <ButtonCommon name="cargando" css={`loading`} />
          ) : (
            <ButtonCommon
              name="Cambiar Datos"
              css={`
                sm: mb-5;
              `}
              action={updateProductHandler}
            />
          )}
          <ButtonCommon name="Cancelar" action={props.cancel} />
        </div>
      </form>
    </div>
  );
};
export default ProductsUpdate;
