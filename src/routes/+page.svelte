<script>
  export let data;
</script>

<div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 capitalize">Category: {data.products.pasta[0].category}</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        {#each data.products.pasta as {name, price, inStock, image}}
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="{image}" alt="{name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 capitalize">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {name}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">In stock: {inStock}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">AED{price}</p>
          </div>
        </div>
        {/each}
        <!-- More products... -->
      </div>
      
    </div>

    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 capitalize">Category: {data.products.stationary[0].category}</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        {#each data.products.stationary as {name, price, inStock, image}}
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="{image}" alt="{name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 capitalize">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {name}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">In stock: {inStock}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">AED{price}</p>
          </div>
        </div>
        {/each}
        <!-- More products... -->
      </div>
      
    </div>

    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 capitalize">Category: {data.products['fruits and vegetables'][0].category}</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        {#each data.products['fruits and vegetables'] as {name, price, inStock, image}}
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="{image}" alt="{name}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700 capitalize">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {name}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">In stock: {inStock}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">AED{price}</p>
          </div>
        </div>
        {/each}
        <!-- More products... -->
      </div>
      
    </div>
  </div>
