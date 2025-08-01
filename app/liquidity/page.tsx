import { AddLiquidityForm, RemoveLiquidityForm } from '@/components/LiquidityForms';

export default function LiquidityPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AddLiquidityForm />
        <RemoveLiquidityForm />
      </div>
    </div>
  );
}