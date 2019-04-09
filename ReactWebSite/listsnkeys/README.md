1. Keys help React identify which items have changed.
                            which items have been added.
                            which items are removed.

2. The best way is to have a unique string value to the key.
3. If you dont have stable ID's use the item index as the key. [if the order of the items changes ignore this.]      
This can negatively impact performance + cause issues with component state.
4. Always remember -> elements inside the map method needs keys.Using NumberList in the correct and wrong way is demonstrated.
5. keys used within ARRAYS should be unique among their siblings. - however they no need to be globally unique.**
6. keys serve as a hint to react - but they do not get passed to your components.