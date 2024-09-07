import { Dispatch, SetStateAction } from "react";

const tipOptions = [
    {
        id: "tip-10",
        value: 0.1,
        label: "10%",
    },
    {
        id: "tip-20",
        value: 0.2,
        label: "20%",
    },
    {
        id: "tip-50",
        value: 0.5,
        label: "50%",
    },
];

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>;
    tip: number;
};

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map((tipOpcion) => (
                    <div key={tipOpcion.id} className="flex gap-2">
                        <label htmlFor={tipOpcion.id}>{tipOpcion.label}</label>
                        <input
                            type="radio"
                            id={tipOpcion.id}
                            name="tip"
                            value={tipOpcion.value}
                            onChange={ e => setTip(+e.target.value)}
                            checked={tip === tipOpcion.value}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
}
