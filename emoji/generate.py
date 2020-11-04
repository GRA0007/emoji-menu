import glob

# Find images
images = glob.glob("*.png")
print("Found " + str(len(images)) + " emoji")

# Open file
f = open("emoji.js", "w")

f.write("const emoji = [\n")

for image in images:
	filename = image[:-4]
	codepoints = filename.split("_")
	f.write("\t['"+codepoints[0][1:]+"', '"+codepoints[1][1:]+"'],\n")

f.write("];\n\nexport { emoji as default };")

print("Done :)")

f.close()
