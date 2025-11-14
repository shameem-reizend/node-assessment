import { useState, useEffect } from "react"
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
import { toast } from "react-toastify"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { fetchProductByIdAPI, fetchProductsAPI } from "../../api/product"
import type { Product } from "../../pages/Product"
import { createSalesAPI } from "../../api/sale"

export interface itemType {
  product_id: string
  quantity: number
}

interface SalePayload {
  items: itemType[]
}

interface SalePropType {
    fetchSales: () => void
}

export const AddSale: React.FC<SalePropType> = ({fetchSales}) => {
  const [quantity, setQuantity] = useState(0)
  const [open, setOpen] = useState(false)

  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const [saleData, setSaleData] = useState<SalePayload>({
    items: [],
  })

  useEffect(() => {
    fetchProductsAPI().then((data) => setProducts(data))
  }, [])

  const handleSelectChange = async (value: string) => {
    const product = await fetchProductByIdAPI(value)
    setSelectedProduct(product)
  }

  const addproduct = () => {
    if (!selectedProduct) {
      toast.error("Select a product first")
      return
    }

    const newItem = {
      product_id: selectedProduct.product_id,
      quantity,
    }

    setSaleData((prev) => ({
      items: [...prev.items, newItem],
    }))
  }


  const handleSubmit = async () => {
   try {
        const response = await createSalesAPI(saleData.items);
        console.log(response)
        if(response.success == true) {
            toast.success('sale successfully created');
            setOpen(false);
            fetchSales();
        } else{
            toast.error('Something went wrong')
        }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <button
            onClick={() => setOpen(true)}
            className="bg-orange text-white rounded-lg px-6 py-2 cursor-pointer"
          >
            Add Sale
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Sale</DialogTitle>
            <DialogDescription>
              Add your new Sale. Click save when you’re done.
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
              <Input
                id="quantity"
                name="quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            {/* Display items */}
            {saleData.items.map((i) => (
              <div key={i.product_id}>
                {i.product_id} — {i.quantity}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="bg-orange text-white w-1/3 rounded-xl px-3 py-2"
            onClick={addproduct}
          >
            Add Product
          </button>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="button"
              onClick={handleSubmit}
              className="text-white"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
