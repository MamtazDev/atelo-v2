import MainLayout from '@/Layout/MainLayout';
import { Bar, BarChart, CartesianAxis, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import BombayImg from '../assets/views-item.png';
import Image from 'next/image';

function analytics() {
    const data = [
        {
            name: '26/08/23',
            value: 75,
        },
        {
            name: '27/08/23',
            value: 125,
        },
        {
            name: '28/08/23',
            value: 130,
        },
        {
            name: '29/08/23',
            value: 100,
        },
        {
            name: '30/08/23',
            value: 75,
        },
        {
            name: '31/08/23',
            value: 90,
        },
        {
            name: '01/09/23',
            value: 105,
        },
    ];

    const borderTopRadius = {
        borderTopRadius: '20'
    }

    const viewsItem = [
        {
            itemNumber: 1,
            itemImg: BombayImg,
            itemTitle: 'Bombay biryani'
        },

        {
            itemNumber: 2,
            itemImg: BombayImg,
            itemTitle: 'Bombay biryani'
        },

        {
            itemNumber: 3,
            itemImg: BombayImg,
            itemTitle: 'Bombay biryani'
        },
        {
            itemNumber: 4,
            itemImg: BombayImg,
            itemTitle: 'Bombay biryani'
        },
    ]

    return (
        <MainLayout>
            <section className='w-full'>
                <div className='container'>
                    <div className='mt-[45px]'>
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-12 md:col-span-7'>
                                <div className='bar_chart shadow-menuItems bg-white h-[525px]'>
                                    <div className='chart_head flex justify-between items-center p-4'>
                                        <h2 className='text-[20px] font-bold '>
                                            Menu Views
                                        </h2>
                                        <select className="select outline-none border-0 focus:outline-none bg-c_f5 text-c_85 font-normal font-normal">
                                            <option disabled selected>Last 7 days</option>
                                            <option>Last One Month</option>
                                            <option>Last One Year</option>

                                        </select>
                                    </div>
                                    <ResponsiveContainer width="100%" height={400}>
                                        <BarChart data={data} fill="#006B54" style={borderTopRadius}>

                                            <XAxis dataKey={"name"} axisLine={false} tickLine={false} className='text-[#747985] text-center font-normal' />
                                            <YAxis dataKey={"value"} axisLine={false} tickLine={false} className='text-[#747985], text-right, text-[12px]' />
                                            <Bar dataKey={"value"} radius={[10, 10, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className='col-span-12 md:col-span-5'>
                                <div className='viewed_dished p-4 px-5 shadow-menuItems rounded-xl'>
                                    <h2 className=' text-c_33 font-bold text-xl ff_mont'>
                                        5 Most Viewed Dishes
                                    </h2>

                                    <div className='views_items_wrapper h-[466px] overflow-y-scroll customScroller'>

                                        {
                                            viewsItem.map((item, index) => (
                                                <div className='views_item flex items-center shadow-menuItems rounded-2xl gap-5 my-5 py-5 px-3' key={index}>
                                                    <div className='numberOfItem'>
                                                        <span className='item_numbler w-[30px] h-[30px] flex items-center justify-center rounded-full bg-c_f5 font-semibold text-c_54'>
                                                            {item.itemNumber}
                                                        </span>
                                                    </div>
                                                    <div className="viewsItemImg">
                                                        <Image src={item.itemImg} alt='views-item' />
                                                    </div>
                                                    <div className="viewsItemTitle">
                                                        <h2 className='text-c_85 text-[22px] font-semibold'>
                                                            {item.itemTitle}
                                                        </h2>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                            </div>

                            <div className='col-span-12'>
                                <div className='information p-10 rounded-xl bg-white shadow-menuItems'>
                                    <h2 className='text-xl font-bold text-c_33'>
                                        What kind of information would you like to know?
                                    </h2>

                                    <ul className='my-5'>
                                        <li className='pb-7'>
                                            <label class="cursor-pointer flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    class="w-5 h-5 rounded border-gray-300 accent-c_54"
                                                />
                                                <div class="existingitem_wrapper">
                                                    <h2 class="text-[#747985CC] font-medium text-lg">
                                                        How many times has the menu been translated, and into which languages?
                                                    </h2>
                                                </div>
                                            </label>
                                        </li>

                                        <li className='pb-7'>
                                            <label class="cursor-pointer flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    class="w-5 h-5 rounded border-gray-300 accent-c_54"
                                                />
                                                <div class="existingitem_wrapper">
                                                    <h2 class="text-[#747985CC] font-medium text-lg">
                                                        How many times have the allergy filters been used?
                                                    </h2>
                                                </div>
                                            </label>
                                        </li>

                                        <li className='pb-7'>
                                            <label class="cursor-pointer flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    class="w-5 h-5 rounded border-gray-300 accent-c_54"
                                                />
                                                <div class="existingitem_wrapper">
                                                    <h2 class="text-[#747985CC] font-medium text-lg">
                                                        How many times have the diet filters been used?
                                                    </h2>
                                                </div>
                                            </label>
                                        </li>

                                        <li className='pb-7'>
                                            <label class="cursor-pointer flex items-center gap-4">
                                                <input
                                                    type="checkbox"
                                                    class="w-5 h-5 rounded border-gray-300 accent-c_54"
                                                />
                                                <div class="existingitem_wrapper">
                                                    <h2 class="text-[#747985CC] font-medium text-lg">
                                                        How many times have customers viewed each dish?
                                                    </h2>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>

                                    <input
                                        class="w-full outline-none"
                                        id="menudescription"
                                        type="text"
                                        placeholder="Tell us what else you would like to know…"
                                    />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default analytics