import React, { useState } from 'react';
import menuData    from '../data/menu';
import ItemButton  from './ItemButton';
import ModifierRow from './ModifierRow';
import styles      from '../styles/ItemGrid.module.css';

const modifiersConfig = {
  peri: [
    { label: 'No extra sides (£0)', price: 0 },
    { label: '+2 sides (£6.25)',      price: 6.25 }
  ],
  burgers: [
    { label: 'No extra sides (£0)', price: 0 },
    { label: '+1 side (£4.25)',     price: 4.25 },
    { label: '+2 sides (£6.25)',    price: 6.25 }
  ],
  veggie: [
    { label: 'No extra sides (£0)', price: 0 },
    { label: '+1 side (£4.25)',     price: 4.25 },
    { label: '+2 sides (£6.25)',    price: 6.25 }
  ],
  salads: [
    { label: 'On Its Own (£0)',     price: 0 },
    { label: 'w-chicken (£4)',      price: 4    },
    { label: 'w-beani (£4)',        price: 4    },
    { label: 'w-plant (£4)',        price: 4    },
    { label: 'w-ch/thigh (£5)',     price: 5    }
  ]
};

export default function ItemGrid({ categoryId, onAddItem }) {
  const [selected, setSelected] = useState(null);
  const items = menuData.items[categoryId] || [];

  const handleItemClick = item => {
    const mods = modifiersConfig[categoryId];
    if (mods) {
      setSelected(item);
    } else {
      onAddItem(item, { label: '', price: 0 });
    }
  };

  const handleModifierSelect = mod => {
    onAddItem(selected, mod);
    setSelected(null);
  };

  return (
    <div>
      <div className={styles.grid}>
        {items.map((item, idx) => (
          <ItemButton
            key={idx}
            item={item}
            onClick={handleItemClick}
          />
        ))}
      </div>
      {selected && (
        <ModifierRow
          options={modifiersConfig[categoryId]}
          onSelect={handleModifierSelect}
        />
      )}
    </div>
  );
}
