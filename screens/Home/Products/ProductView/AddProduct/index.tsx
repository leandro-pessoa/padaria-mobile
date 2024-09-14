// funções
import { useAppDispatch } from '../../../../../features/hooks';
import { addProductInCart } from '../../../../../features/reducers/product';
import uuid from 'react-native-uuid';

// componentes
import { StyledTouchableOpacity } from './styles';
import React from 'react';

// icones
import IonIcon from 'react-native-vector-icons/Ionicons';

// variaveis
import { variables } from '../../../../../variables';

// tipagens externas
import { IProduct } from '../../../../../interfaces/IProduct';

// tipagens dos props
interface AddProductProps {
    image: string;
    title: string;
    price: number;
}

const AddProduct = ({ image, title, price }: AddProductProps) => {
    const dispatch = useAppDispatch();

    const addProductHandle = () => {
        const newProduct: IProduct = {
            id: uuid.v4(),
            image: image,
            title: title,
            price: price,
        };
        dispatch(addProductInCart(newProduct));
    };

    return (
        <StyledTouchableOpacity onPress={addProductHandle}>
            <IonIcon name="add" color={variables.white} size={30} />
        </StyledTouchableOpacity>
    );
};

export default AddProduct;
