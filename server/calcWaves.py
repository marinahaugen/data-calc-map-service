
import xarray as xr

fn = '../ex-data/waves_2019-01-01.nc'
ds_waves = xr.open_dataset(fn)
data_array_hmax = ds_waves['hmax']

def findHmax(lng, lat):
  da_hmax_lng_lat = data_array_hmax.sel(longitude=lng, latitude=lat, method='nearest')
  hmax_over_time = da_hmax_lng_lat.max(dim="time")
  return str(hmax_over_time.data)



