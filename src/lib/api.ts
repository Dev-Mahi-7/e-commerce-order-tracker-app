export const fetchOrders = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    const items = data.products.map((item: any) => {
      const shippingCost = item.price > 100 ? 10 : 5;

      let status = "";
      if (item.id % 3 === 0) status = "Shipped";
      else if (item.id % 3 === 1) status = "Processing";
      else status = "Pending";

      const totalCost = item.price + shippingCost;

      return {
        id: item.id,
        title: item.title,
        price: item.price,
        shippingCost,
        status,
        totalCost,
      };
    });

    const totalOrders = items.length;

    const totalValue = items.reduce(
      (acc: number, curr: any) => acc + curr.totalCost,
      0
    );

    const avgOrderValue = (totalValue / totalOrders).toFixed(2);

    const shippedOrders = items.filter(
      (i: any) => i.status === "Shipped"
    ).length;

    return {
      items,
      summary: {
        totalOrders,
        avgOrderValue,
        shippedOrders,
      },
      error: null,
    };
  } catch (err) {
    return {
      items: [],
      summary: {},
      error: "Failed to fetch data",
    };
  }
};