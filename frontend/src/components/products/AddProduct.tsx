import { useState } from "react"
import { Button } from "../../components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { createProductAPI } from "../../api/product"
import { toast } from "react-toastify"

interface AddProductProps {
    fetchProducts: () => void
}

export const AddProduct: React.FC <AddProductProps> = ({fetchProducts}) => {

    const[name, setName] = useState("");
    const[price, setPrice] = useState(0);
    const[sku, setSku] = useState("");
    const[stock, setStock] = useState(0);
    const[tax, setTax] = useState(0);

    const [open, setOpen] = useState(false)

    const handleSubmit = async () => {
       const response = await createProductAPI({name, price, sku, current_stock: stock, tax_percentage: tax})
       console.log(response)
       if(response.success === true){
        toast.success('Product added');
        setName('');
        setSku('');
        setPrice(0);
        setStock(0);
        setTax(0);
        setOpen(false);
        fetchProducts();
       }
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <button onClick={() => setOpen(true)} className='bg-orange text-white rounded-lg px-6 py-2 cursor-pointer'>Add Product</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
            <DialogDescription>
              Add your new product in stock Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input onChange={(e) => setName(e.target.value)} id="name" name="name" defaultValue="sugar" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sku">SKU</Label>
              <Input onChange={(e) => setSku(e.target.value)} id="sku" name="sku" defaultValue="SUG-123" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input onChange={(e) => setPrice(Number(e.target.value))} id="price" name="price" defaultValue="200" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="current_stock">Current Stock</Label>
              <Input onChange={(e) => setStock(Number(e.target.value))} id="current_stock" name="current_stock" defaultValue="20" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="tax">Tax Percentage</Label>
              <Input onChange={(e) => setTax(Number(e.target.value))} id="tax" name="tax" defaultValue="0.25" />
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
