#!/bin/bash

# Function to recursively traverse directories and generate JSON
generate_json() {
    local dir=$1
    local indent=$2
    local json="["

    # Get list of files and directories in current directory
    local files=$(ls -a "$dir")

    # Loop through each entry
    for entry in $files; do
        # Exclude current directory and parent directory entries
        if [ "$entry" != "." ] && [ "$entry" != ".." ]; then
            local path="$dir/$entry"

            # Check if entry is a directory
            if [ -d "$path" ]; then
                json="$json\n${indent}{\"path\": \"$entry\", \"type\": \"directory\", \"children\": $(generate_json "$path" "$indent    ")},"
            else
                # If entry is a file
                json="$json\n${indent}{\"path\": \"$entry\", \"type\": \"file\"},"
            fi
        fi
    done

    # Remove trailing comma from the last entry
    json=$(echo "$json" | sed '$ s/,$//')
    json="$json\n$indent]"

    echo -e "$json"
}

# Main function
main() {
    local start_dir=$1
    local json_structure=$(generate_json "$start_dir" "")

    # Write JSON structure to a file
    echo -e "$json_structure" >folder_structure.json

    echo "JSON representation of folder structure has been created in folder_structure.json"
}

# Check if argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Check if provided directory exists
if [ ! -d "$1" ]; then
    echo "Error: Directory '$1' not found."
    exit 1
fi

# Call main function with provided directory
main "$1"
