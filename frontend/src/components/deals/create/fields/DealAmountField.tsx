import { Control } from "react-hook-form";
import { DealFormData } from "@/types/types";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function DealAmountField({ control }: { control: Control<DealFormData> }) {
  return (
    <FormField
      control={control}
      name="amount"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Amount</FormLabel>
          <FormControl>
            <Input 
              type="number" 
              placeholder="Enter amount" 
               {...field}
              value={field.value === 0 ? "" : field.value} 
              onChange={(e) => {
                const inputValue = e.target.value;
                
                if (inputValue === "" || inputValue === "-") {
                  field.onChange(undefined);
                } else {
                  const numValue = parseFloat(inputValue);
                  field.onChange(isNaN(numValue) ? undefined : numValue);
                }
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}