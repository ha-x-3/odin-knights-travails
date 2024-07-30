function knightMoves(start, end) {
	const board = 8; // 8x8 chess board
	const moves = [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1],
	];

	// Check if the move is within the board
	function isValidMove(x, y) {
		return x >= 0 && x < board && y >= 0 && y < board;
	}

	// BFS
	function bfs() {
		const queue = [[start]];
		const visited = new Set([start.toString()]);

		while (queue.length > 0) {
			const path = queue.shift();
			const [x, y] = path[path.length - 1];

			if (x === end[0] && y === end[1]) {
				return path;
			}

			for (const [dx, dy] of moves) {
				const newX = x + dx;
				const newY = y + dy;
				const newPosition = [newX, newY];

				if (
					isValidMove(newX, newY) &&
					!visited.has(newPosition.toString())
				) {
					visited.add(newPosition.toString());
					queue.push([...path, newPosition]);
				}
			}
		}
	}

	const shortestPath = bfs();

	console.log(
		`You made it in ${shortestPath.length - 1} moves! Here's your path:`
	);
	shortestPath.forEach((position) => console.log(position));

	return shortestPath;
}

knightMoves([3, 3], [4, 3]);
