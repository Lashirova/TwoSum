

function twoSum(nums: number[], target: number): number[] {
	// store values we've seen and their indexes
    let seen: {[key: string]: number} = {};
    let pairIndex: number | undefined;
    for (let i = 0; i < nums.length; i++) {
		// trying to find index of pair to current item.
        pairIndex = seen[target - nums[i]];
        if (pairIndex !== undefined) {
            return [pairIndex, i]
        }
        seen[nums[i]] = i;
    }
    throw new Error('No solution')
};
