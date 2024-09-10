import { create } from 'zustand';


interface Item {
  name: string;
}

interface FilterState {
  items: Item[]; 
  filtered: Item[];  
  setItems: (newItems: Item[]) => void; 
  filterByName: (name: string) => void;  
}


const useFilter = create<FilterState>((set) => ({
  items: [],  
  filtered: [],  
  setItems: (newItems) => set({ items: newItems }), 
  filterByName: (name) => set((state) => ({
    filtered: state.items.filter(item => item.name.toLowerCase().includes(name.toLowerCase()))
  })),
}));

export default useFilter;
