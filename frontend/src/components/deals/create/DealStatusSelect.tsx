import { Control } from "react-hook-form";
import { DealFormData } from "@/types/types";
import { DealStatus } from "@/types/enums";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function DealStatusSelect({ control }: { control: Control<DealFormData> }) {
  return (
    <FormField
      control={control}
      name="status"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Status</FormLabel>

          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              <SelectItem value={DealStatus.NEW}>NEW</SelectItem>
              <SelectItem value={DealStatus.IN_PROGRESS}>IN PROGRESS</SelectItem>
              <SelectItem value={DealStatus.WON}>WON</SelectItem>
              <SelectItem value={DealStatus.LOST}>LOST</SelectItem>
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}