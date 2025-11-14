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
import { fetchSaleDetailAPI, fetchSaleItemsAPI } from "../../api/sale"


interface saleDetailProp{
  sale_id: string
}
interface SaleItem {
  sale_id: string
  quantity: number,
  sales_price: number,
  sold_at: string
}
interface Sale {
  sale_id: string
  discount: number,
  total_amount: number,
  final_amount: number,
  created_at: string
}
export const SaleDetail: React.FC<saleDetailProp> = ({sale_id}) => {
    const [open, setOpen] = useState(false);
    const [saleItem, setSaleItem] = useState<SaleItem[]>([])
    const [sale, setSale] = useState<Sale>({})
    console.log(sale_id)
    
    const fetchSaleItem = async () => {
      console.log(sale_id)
      const response = await fetchSaleItemsAPI(sale_id);
      const saleResponse = await fetchSaleDetailAPI(sale_id);
      setSaleItem(response.saleItems)
      setSale(saleResponse.sale)
    }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <button onClick={fetchSaleItem} className='bg-orange text-white rounded-lg px-6 py-2 cursor-pointer'>View Detail</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sale Details</DialogTitle>

          </DialogHeader>
          <div className="grid gap-4">
              <div key={sale.sale_id} className="pl-3">
                <div>Total_amount: {sale.total_amount}</div>
                <div>Discount: {sale.discount}</div>
                <div>Final Amount: {sale.final_amount}</div>
                <div>Sold Date: {sale.created_at}</div>
              </div>

          </div>
            <hr />
          <div className="grid gap-4">
            {saleItem?.map((item) => (
              <div key={item.sale_id} className="pl-3">
                <div>Product name: {item.product.name}</div>
                <div>Quantity: {item.quantity}</div>
                <div>sales Price: {item.sales_price}</div>
              </div>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" >close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
