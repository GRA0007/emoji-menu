const emoji = [
	['1f47b', '1f5a4'],
	['1f47b', '1f90d'],
	['1f499', '1f5a4'],
	['1f499', '1f90d'],
	['1f49a', '1f5a4'],
	['1f49a', '1f90d'],
	['1f49b', '1f5a4'],
	['1f49b', '1f90d'],
	['1f49c', '1f5a4'],
	['1f49c', '1f90d'],
	['1f5a4', '1f308'],
	['1f5a4', '1f31b'],
	['1f5a4', '1f31c'],
	['1f5a4', '1f31f'],
	['1f5a4', '1f337'],
	['1f5a4', '1f339'],
	['1f5a4', '1f33c'],
	['1f5a4', '1f382'],
	['1f5a4', '1f388'],
	['1f5a4', '1f38a'],
	['1f5a4', '1f397-ufe0f'],
	['1f5a4', '1f441-ufe0f'],
	['1f5a4', '1f451'],
	['1f5a4', '1f48b'],
	['1f5a4', '1f48c'],
	['1f5a4', '1f48e'],
	['1f5a4', '1f490'],
	['1f5a4', '1f493'],
	['1f5a4', '1f494'],
	['1f5a4', '1f495'],
	['1f5a4', '1f496'],
	['1f5a4', '1f497'],
	['1f5a4', '1f498'],
	['1f5a4', '1f49d'],
	['1f5a4', '1f49e'],
	['1f5a4', '1f49f'],
	['1f5a4', '1f4ab'],
	['1f5a4', '1f4af'],
	['1f5a4', '1f525'],
	['1f5a4', '1f573-ufe0f'],
	['1f5a4', '1f5a4'],
	['1f5a4', '2665-ufe0f'],
	['1f5a4', '2763-ufe0f'],
	['1f5a4', '2b50'],
	['1f600', '1f308'],
	['1f600', '1f30d'],
	['1f600', '1f31b'],
	['1f600', '1f31c'],
	['1f600', '1f31e'],
	['1f600', '1f31f'],
	['1f600', '1f32a-ufe0f'],
	['1f600', '1f32d'],
	['1f600', '1f332'],
	['1f600', '1f335'],
	['1f600', '1f336-ufe0f'],
	['1f600', '1f339'],
	['1f600', '1f34d'],
	['1f600', '1f37d-ufe0f'],
	['1f600', '1f382'],
	['1f600', '1f383'],
	['1f600', '1f388'],
	['1f600', '1f38a'],
	['1f600', '1f419'],
	['1f600', '1f41d'],
	['1f600', '1f422'],
	['1f600', '1f428'],
	['1f600', '1f42d'],
	['1f600', '1f430'],
	['1f600', '1f431'],
	['1f600', '1f435'],
	['1f600', '1f437'],
	['1f600', '1f43c'],
	['1f600', '1f441-ufe0f'],
	['1f600', '1f451'],
	['1f600', '1f47b'],
	['1f600', '1f47d'],
	['1f600', '1f47f'],
	['1f600', '1f480'],
	['1f600', '1f48b'],
	['1f600', '1f48c'],
	['1f600', '1f48e'],
	['1f600', '1f490'],
	['1f600', '1f493'],
	['1f600', '1f494'],
	['1f600', '1f495'],
	['1f600', '1f496'],
	['1f600', '1f497'],
	['1f600', '1f498'],
	['1f600', '1f49d'],
	['1f600', '1f49e'],
	['1f600', '1f49f'],
	['1f600', '1f4a9'],
	['1f600', '1f4ab'],
	['1f600', '1f4f0'],
	['1f600', '1f525'],
	['1f600', '1f52e'],
	['1f600', '1f573-ufe0f'],
	['1f600', '1f577-ufe0f'],
	['1f600', '1f600'],
	['1f600', '1f601'],
	['1f600', '1f602'],
	['1f600', '1f603'],
	['1f600', '1f604'],
	['1f600', '1f605'],
	['1f600', '1f606'],
	['1f600', '1f607'],
	['1f600', '1f608'],
	['1f600', '1f609'],
	['1f600', '1f60a'],
	['1f600', '1f60b'],
	['1f600', '1f60c'],
	['1f600', '1f60d'],
	['1f600', '1f60e'],
	['1f600', '1f60f'],
	['1f600', '1f610'],
	['1f600', '1f611'],
	['1f600', '1f612'],
	['1f600', '1f613'],
	['1f600', '1f614'],
	['1f600', '1f615'],
	['1f600', '1f616'],
	['1f600', '1f617'],
	['1f600', '1f618'],
	['1f600', '1f619'],
	['1f600', '1f61a'],
	['1f600', '1f61b'],
	['1f600', '1f61c'],
	['1f600', '1f61d'],
	['1f600', '1f61e'],
	['1f600', '1f61f'],
	['1f600', '1f620'],
	['1f600', '1f621'],
	['1f600', '1f622'],
	['1f600', '1f623'],
	['1f600', '1f624'],
	['1f600', '1f625'],
	['1f600', '1f626'],
	['1f600', '1f627'],
	['1f600', '1f628'],
	['1f600', '1f629'],
	['1f600', '1f62a'],
	['1f600', '1f62b'],
	['1f600', '1f62c'],
	['1f600', '1f62d'],
	['1f600', '1f62e'],
	['1f600', '1f62f'],
	['1f600', '1f630'],
	['1f600', '1f631'],
	['1f600', '1f632'],
	['1f600', '1f633'],
	['1f600', '1f634'],
	['1f600', '1f635'],
	['1f600', '1f636'],
	['1f600', '1f637'],
	['1f600', '1f641'],
	['1f600', '1f642'],
	['1f600', '1f643'],
	['1f600', '1f644'],
	['1f600', '1f648'],
	['1f600', '1f910'],
	['1f600', '1f911'],
	['1f600', '1f912'],
	['1f600', '1f913'],
	['1f600', '1f914'],
	['1f600', '1f915'],
	['1f600', '1f916'],
	['1f600', '1f917'],
	['1f600', '1f920'],
	['1f600', '1f921'],
	['1f600', '1f922'],
	['1f600', '1f923'],
	['1f600', '1f924'],
	['1f600', '1f925'],
	['1f600', '1f927'],
	['1f600', '1f928'],
	['1f600', '1f929'],
	['1f600', '1f92a'],
	['1f600', '1f92b'],
	['1f600', '1f92c'],
	['1f600', '1f92d'],
	['1f600', '1f92e'],
	['1f600', '1f92f'],
	['1f600', '1f951'],
	['1f600', '1f970'],
	['1f600', '1f971'],
	['1f600', '1f972'],
	['1f600', '1f973'],
	['1f600', '1f974'],
	['1f600', '1f975'],
	['1f600', '1f976'],
	['1f600', '1f978'],
	['1f600', '1f97a'],
	['1f600', '1f981'],
	['1f600', '1f987'],
	['1f600', '1f98c'],
	['1f600', '1f994'],
	['1f600', '1f999'],
	['1f600', '1f9a0'],
	['1f600', '1f9a5'],
	['1f600', '1f9c0'],
	['1f600', '1f9c1'],
	['1f600', '1f9d0'],
	['1f600', '2601-ufe0f'],
	['1f600', '2615'],
	['1f600', '2639-ufe0f'],
	['1f600', '263a-ufe0f'],
	['1f600', '2665-ufe0f'],
	['1f600', '26c4'],
	['1f600', '2763-ufe0f'],
	['1f600', '2b50'],
	['1f602', '1f337'],
	['1f60d', '1f5a4'],
	['1f60d', '1f90d'],
	['1f60e', '1f5a4'],
	['1f60e', '1f90d'],
	['1f60f', '1f92f'],
	['1f618', '1f33c'],
	['1f618', '1f37d-ufe0f'],
	['1f618', '1f5a4'],
	['1f618', '1f90d'],
	['1f61f', '1f924'],
	['1f625', '1f47b'],
	['1f90d', '1f308'],
	['1f90d', '1f31b'],
	['1f90d', '1f31c'],
	['1f90d', '1f31f'],
	['1f90d', '1f337'],
	['1f90d', '1f339'],
	['1f90d', '1f33c'],
	['1f90d', '1f382'],
	['1f90d', '1f388'],
	['1f90d', '1f38a'],
	['1f90d', '1f397-ufe0f'],
	['1f90d', '1f441-ufe0f'],
	['1f90d', '1f451'],
	['1f90d', '1f48b'],
	['1f90d', '1f48c'],
	['1f90d', '1f48e'],
	['1f90d', '1f490'],
	['1f90d', '1f493'],
	['1f90d', '1f494'],
	['1f90d', '1f495'],
	['1f90d', '1f496'],
	['1f90d', '1f497'],
	['1f90d', '1f498'],
	['1f90d', '1f49d'],
	['1f90d', '1f49e'],
	['1f90d', '1f49f'],
	['1f90d', '1f4ab'],
	['1f90d', '1f4af'],
	['1f90d', '1f525'],
	['1f90d', '1f573-ufe0f'],
	['1f90d', '1f5a4'],
	['1f90d', '1f90d'],
	['1f90d', '1f9c1'],
	['1f90d', '2665-ufe0f'],
	['1f90d', '2763-ufe0f'],
	['1f90d', '2b50'],
	['1f90e', '1f5a4'],
	['1f90e', '1f90d'],
	['1f910', '1f633'],
	['1f910', '1f9c1'],
	['1f913', '1f5a4'],
	['1f913', '1f90d'],
	['1f921', '1f5a4'],
	['1f921', '1f90d'],
	['1f929', '1f5a4'],
	['1f929', '1f90d'],
	['1f970', '1f5a4'],
	['1f970', '1f90d'],
	['1f973', '1f5a4'],
	['1f973', '1f90d'],
	['1f9c1', '1f441-ufe0f'],
	['1f9e1', '1f5a4'],
	['1f9e1', '1f90d'],
	['2764-ufe0f', '1f5a4'],
	['2764-ufe0f', '1f90d'],
];
export { emoji as default };