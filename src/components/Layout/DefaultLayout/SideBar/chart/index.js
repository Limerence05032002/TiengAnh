import React from "react";
import { LineChart, ResponsiveContainer,Line, XAxis, YAxis } from 'recharts'

const Pdata=[
    {
        name: 'T2',
        student: 50,
        fees: 10
    },
    {
        name: 'T3',
        student: 30,
        fees: 16
    },
    {
        name: 'T4',
        student: 35,
        fees: 20
    },
    {
        name: 'T5',
        student: 12,
        fees: 10
    },
    {
        name: 'T6',
        student: 31,
        fees: 10
    },
    {
        name: 'T7',
        student: 24,
        fees: 10
    },
    {
        name: 'CN',
        student: 30,
        fees: 10
    }
    
]

const Barchart = () =>{
    return(
        <div>
            <ResponsiveContainer width={"30%"} aspect={3}>
                <LineChart data={Pdata} width={20} height={30}>
                    <XAxis dataKey={"name"} interval={'preserveStartEnd'}/>
                    
                    <Line dataKey={"student"}/>
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}

export default Barchart