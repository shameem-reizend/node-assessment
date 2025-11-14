import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { createPurchaseAPI } from "../../api/purchase"
import { toast } from "react-toastify"
import type { Product } from "../../pages/Product"
import { fetchProductsAPI } from "../../api/product"


interface AddPurchasePropType{
  fetchpurchase: () => void
}

export const AddPurchase: React.FC<AddPurchasePropType> = ({fetchpurchase}) => {

    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<string>('')
    const[quantity, setQuantity] = useState(0);

    const [open, setOpen] = useState(false)

    useEffect(() => {
        fetchProductsAPI().then((data) => setProducts(data))
      }, [])


    const handleSelectChange = async (value: string) => {
      setSelectedProduct(value)
    }
    const handleSubmit = async () => {
       const response = await createPurchaseAPI({product_id: selectedProduct, quantity})
       console.log(response)
       if(response.success === true){
        toast.success('Product added');
        fetchpurchase();
        setOpen(false)
       }
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <button onClick={() => setOpen(true)} className='bg-orange text-white rounded-lg px-6 py-2 cursor-pointer'>Add Purchase</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Purchase</DialogTitle>
            <DialogDescription>
              Add your new product in stock Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Products</SelectLabel>
                    {products.map((product) => (
                      <SelectItem
                        key={product.product_id}
                        value={product.product_id}
                      >
                        {product.sku} - {product.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="quantity">Quantity</Label>
              <Input onChange={(e) => setQuantity(Number(e.target.value))} id="quantity" name="quantity" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit} className="text-white">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
