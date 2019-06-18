from data import load
from test import save
import pickle as pkl


def load_mapping():

    with open("saved/mapping.pkl", "rb") as f:
        mapping = pkl.load(f)
        return mapping

if __name__ == "__main__":

	#### Patch 1
    # X, y = load()

    # mapping = load_mapping()

    # TEST: see if all X lengths match corresponding out lengths
    # for idx, output_sequence in enumerate(mapping['out']):
    #     assert( len(output_sequence) == len(X[idx]) )

    # output_sequences = mapping['out']

    # new_mapping = []

    # for idx in range(len(X)):
    #     new_mapping.append((X[idx], y[idx], output_sequences[idx]))

    # save(new_mapping)

	#### Patch 1
	# new_mapping_2 = [ (x, int(y), o) for x, y, o in load_mapping() ]
	# save(new_mapping_2)
	pass


    


