# Calculations on a much bigger dataset and main points of concern to make this possible

- Mask the data (take out empty values before we do calculations)
- Delete variables once done using it (e.g. groupBy makes copy)
- Don't bother calculate for coords that are invlaid (e.g. corrds on land)
- Use Dask to split the datasets in chunks and you can do parallel computations. Dask delayed. Lazy evaluation. Dask represents deferred computations as graphs
- Use ds.groupby('time.day') so we can use the function already made ("split apply combine operations"). If possible the best solution qould be to group by the entire dataset time. E.g if we have data from 30 years, use 30 years as grouping. 
- Store max per day in a Max Heap datastructure. The lookup time T(0) = O(1). Or store max at index (?)

## More on using Dask
- We can integrate with desk to work with datasets that don't fit into memory.
- Blocking arrays into small chunks and executing on those chunks in parallel.
- It allows xarray to easily process large data and also simultaneously make use of all of our CPU resources.


