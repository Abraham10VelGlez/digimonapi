
import React, { useEffect, useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function Scroll() {

    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };




    return (
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">Modal</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">Skeleton</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>

    )
}
