

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "@/components/shared";
import { FilterCheckbox } from "@/components/shared";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn()}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Can be collected" value="1" />
                <FilterCheckbox text="News" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 pt-6 pb-7">
                <p className="font-bold mb-3">Price from ... to: </p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" placeholder="1000" min={0} max={1000} defaultValue={500} />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
            </div>

            <CheckboxFiltersGroup 
                title="Ingridients"
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: 'Sauce cheese',
                        value: '1',
                    },
                    {
                        text: 'Mozzarella',
                        value: '2',
                    },
                    {
                        text: 'Garlic',
                        value: '3',
                    },
                    {
                        text: 'Cornishons',
                        value: '4',
                    },
                    {
                        text: 'Salami',
                        value: '5',
                    },
                    {
                        text: 'Tomat',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Sauce cheese',
                        value: '1',
                    },
                    {
                        text: 'Mozzarella',
                        value: '2',
                    },
                    {
                        text: 'Garlic',
                        value: '3',
                    },
                    {
                        text: 'Cornishons',
                        value: '4',
                    },
                    {
                        text: 'Salami',
                        value: '5',
                    },
                    {
                        text: 'Tomat',
                        value: '6',
                    },
                    {
                        text: 'Basilic',
                        value: '7',
                    },
                    {
                        text: 'Peperonni',
                        value: '8',
                    },
                    {
                        text: 'Cornishons',
                        value: '9',
                    },
                    {
                        text: 'Salami',
                        value: '10',
                    },
                    {
                        text: 'Tomat',
                        value: '11',
                    },
                    {
                        text: 'Basilic',
                        value: '12',
                    },
                    {
                        text: 'Peperonni',
                        value: '13',
                    },
                ]}
            />
        </div>
    );
};