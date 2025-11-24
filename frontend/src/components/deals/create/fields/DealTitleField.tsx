import { Control } from "react-hook-form";
import { DealFormData } from "@/types/types";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function DealTitleField({ control }: { control: Control<DealFormData> }) {
  return (
    <FormField
      control={control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input placeholder="Title" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}