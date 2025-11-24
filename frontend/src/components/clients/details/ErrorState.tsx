import { ErrorStateProps } from "@/types/interfaces";

export default function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl text-red-600">{message}</div>
    </div>
  );
}