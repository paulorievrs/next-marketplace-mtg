import Image from 'next/image';
import { CartItemType } from '../../../contexts/CartContext';
import { formatCurrencyBrl } from '../../../utils/format';
import Body from '../../Body/Body';
import TrashIcon from '../../icons/Trash';
import { Card } from '../../ProductCard/ProductCard';
import ProductInfoText from '../../ProductCard/ProductInfoText';

export default function CartItem({ card }: { card: CartItemType<Card> }) {
  console.log(card);
  return (
    <div className="flex flex-col gap-8 md:justify-center md:items-center pb-4 border-b">
      <div className="flex flex-row gap-4">
        <Image src={card.image} alt="Card image" width={90} height={180} />
        <div>
          <Body fontWeight="font-black">{card.name}</Body>
          <div className="flex flex-col md:w-full md:text-center gap-2">
            <div>
              <ProductInfoText
                title={'Em estoque: '}
                description={`${card.quantity}x`}
                titleClassName={'whitespace-nowrap'}
                className={'gap-1'}
              />

              <ProductInfoText
                title={'Valor Unit:'}
                description={formatCurrencyBrl(card.price)}
              />
              <ProductInfoText
                title={'Valor total:'}
                description={formatCurrencyBrl(
                  card.price * card.quantitySelected
                )}
              />
            </div>
            <div className="flex flex-row place-items-center gap-2">
              <input
                id="quantity"
                placeholder="Qtd"
                min={1}
                max={card.quantity}
                value={card.quantitySelected}
                type={'number'}
                className="pl-1 text-primary h-6 border border-dark-primary outline-0 focus:outline-none w-full placeholder:text-sm"
              />
              <TrashIcon fill={'#eb2d66'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
