import { useState } from "react"
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
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { createPurchaseAPI } from "../../api/purchase"
import { toast } from "react-toastify"


export const AddSale: React.FC = () => {

    const[product, setProduct] = useState("");
    const[quantity, setQuantity] = useState(0);
    const[price, setPrice] = useState(0);

    const [open, setOpen] = useState(false)

    const handleSubmit = async () => {
       const response = await createPurchaseAPI({product, price, quantity})
       console.log(response)
       if(response.success === true){
        toast.success('Product added');
        
       }
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <button onClick={() => setOpen(true)} className='bg-orange text-white rounded-lg px-6 py-2 cursor-pointer'>Add Sale</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Sale</DialogTitle>
            <DialogDescription>
              Add your new product in stock Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="product">Product</Label>
              <Input onChange={(e) => setProduct(e.target.value)} id="product" name="product" defaultValue="sugar" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="quantity">Quantity</Label>
              <Input onChange={(e) => setQuantity(Number(e.target.value))} id="quantity" name="quantity" defaultValue="30" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input onChange={(e) => setPrice(Number(e.target.value))} id="price" name="price" defaultValue="200" />
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
