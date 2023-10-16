import { selectStore } from "../../helpers/storeNameSelect.js";
import { Icon } from "@iconify/react";

export const WhereToBuy = ({ storeData }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl opacity-50">Where to buy</h2>
      <ul className="mt-2 flex flex-wrap gap-2">
        {storeData?.map((store) => (
          <a key={store.id} href={store.url}>
            <li className="group flex cursor-pointer items-center gap-2 rounded-md bg-button-color px-3 py-2 text-sm transition-all duration-200 hover:bg-white hover:text-black">
              <span className="whitespace-nowrap opacity-50 group-hover:opacity-100">
                {selectStore(store.store_id)}
              </span>
              <span className="text-xl opacity-50 group-hover:opacity-100">
                {store.store_id === 3 && <Icon icon="ri:playstation-fill" />}
                {store.store_id === 5 && <Icon icon="mdi:gog" />}
                {store.store_id === 1 && <Icon icon="mdi:steam" />}
                {store.store_id === 2 && <Icon icon="ri:xbox-fill" />}
                {store.store_id === 4 && <Icon icon="ic:baseline-apple" />}
                {store.store_id === 6 && <Icon icon="mdi:nintendo-switch" />}
                {store.store_id === 7 && <Icon icon="ri:xbox-fill" />}
                {store.store_id === 8 && (
                  <Icon icon="simple-icons:googleplay" />
                )}
                {store.store_id === 9 && <Icon icon="cib:itch-io" />}
                {store.store_id === 11 && (
                  <Icon icon="simple-icons:epicgames" />
                )}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};
