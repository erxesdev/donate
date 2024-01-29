'use client';

import { cartSheetAtom } from '@/store';
import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { ShoppingCartIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { LoadingOverlay } from '../ui/loading';
import { Badge } from '../ui/badge';
import { cartLengthAtom } from '@/store/cart.store';

const Cart = dynamic(() => import('./cart'), { loading: LoadingOverlay });

const CartTrigger = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [open, setOpen] = useAtom(cartSheetAtom);
  const length = useAtomValue(cartLengthAtom);

  useEffect(() => {
    if (open) {
      setOpenSheet(open);
    }
  }, [open]);

  return (
    <>
      <Button
        size="icon"
        onClick={() => {
          setOpenSheet(true);
          setOpen(true);
        }}
        className="relative"
      >
        <ShoppingCartIcon className="h-5 w-5" />
        <Badge
          variant="outline"
          className="absolute right-0 top-0 bg-white p-0 h-[14px] min-w-[14px] rounded-lg justify-center text-xs leading-none"
        >
          {length}
        </Badge>
      </Button>
      {(open || openSheet) && <Cart />}
    </>
  );
};

export default CartTrigger;
