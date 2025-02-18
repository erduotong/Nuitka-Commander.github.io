// noinspection JSUnusedGlobalSymbols
/**
 * 英文翻译文件
 * @author erduotong
 */
export default {
// Please translate the 'title' class here
    title: {
        basic: "Basic settings",
        control_the_inclusion_of_modules_and_packages_in_result: "Control which modules and packages to include in the result",
        control_the_following_into_imported_modules: "Control imported modules",
        onefile_options: "Onefile options",
        data_files: "Data files",
        metadata_support: "Metadata support",
        DLL_files: "DLL (dynamic link library) files",
        Linux_specific_controls: "Linux-specific controls",
        control_the_warnings_to_be_given_by_Nuitka: "Control warnings issued by Nuitka",
        immediate_execution_after_compilation: "Execute immediately after compilation",
        compilation_choices: "Compilation options",
        output_choices: "Output options",
        deployment_control: "Deployment control",
        environment_control: "Environment control",
        debug_features: "Debug features",
        nuitka_development_features: "Nuitka development features",
        backend_c_compiler_choice: "Backend C compiler choice",
        cache_control: "Cache control",
        PGO_compilation_choices: "PGO (Profile Guided Optimization) compilation options",
        tracing_features: "Tracing features",
        general_os_controls: "General OS settings",
        windows_specific_controls: "Windows-specific controls",
        macOS_specific_controls: "macOS-specific controls",
        binary_version_information: "Binary version information",
        plugin_control: "Plugin control",
        cross_compilation: "Cross-compilation",
        plugin_options_of_anti_bloat: "'Anti-bloat' plugin options (Category: Core)",
        plugin_options_of_playwright: "'Playwright' plugin options",
        plugin_options_of_spacy: "Spacy plugin options (Category: package support)",
    },
// basic
    module: {
        name: "Module mode",
        desc: "Create a binary extension module executable that can be imported, rather than a program. Off by default.",
    },
    mode: {
        name: "Mode",
        desc: "The mode used for compilation",
        elements: {
            accelerated: {
                name: "Accelerated mode",
                desc: "Accelerated mode runs in your Python installation and depends on it. This is the default mode.",
            },
            standalone: {
                name: "Standalone mode",
                desc: "Standalone mode creates a folder containing the executable to run.",
            },
            onefile: {
                name: "Onefile mode",
                desc: "Onefile mode creates a single executable for deployment.",
            },
            app: {
                name: "App mode",
                desc: "Similar to onefile, but not recommended on macOS.",
            },
            module: {
                name: "Module mode",
                desc: "Generates a module",
            },
            package: {
                name: "Package mode",
                desc: "Generates a module\nAlso includes all submodules and subpackages.",
            },
        },
    },
    standalone: {
        name: "Standalone mode",
        desc: "Enable standalone mode for the output. This allows you to transfer the binary to other machines without an existing Python environment. It makes it large.\nEnables \"--follow-imports\" and \"--python-flag=no_site\".",
    },
    onefile: {
        name: "Onefile mode",
        desc: "Based on standalone mode, enable onefile mode. Instead of a folder, creates and uses a compressed single executable.",
    },
    python_flag: {
        name: "Python flags",
        desc: "Python flags to use. Default is what you used to run Nuitka, forcing specific modes. These are also standard options in Python executables.",
        elements: {
            s: {
                name: "Exclude site-packages directory",
                desc: "Alias no_site",
            },
            static_hashes: {
                name: "Static hashes",
                desc: "Disable hash randomization",
            },
            no_warnings: {
                name: "Disable warnings",
                desc: "No Python runtime warnings",
            },
            o: {
                name: "No assertions",
                desc: "Exclude any debug/error check (assert) statements",
            },
            no_docstrings: {
                name: "No docstrings",
                desc: "Exclude docstrings",
            },
            u: {
                name: "Unbuffered",
                desc: "Alias unbuffered, disable buffering",
            },
            isolated: {
                name: "No external code loading",
                desc: "Do not load external code",
            },
            m: {
                name: "Package mode",
                desc: "Compile as \"package.__main__\"",
            },
        },
    },
    python_debug: {
        name: "Python debug",
        desc: "Whether to use a debug build of Python. By default, the same version you run Nuitka with, likely a non-debug build. Only for debugging or testing.",
    },
    python_for_scons: {
        name: "Python path for Scons",
        desc: "When compiling with Python 3.4, provide a Python binary path for Scons. Otherwise, Nuitka can use your Python or discover the installation, e.g., from Windows registry. On Windows, needs Python 3.5+, on non-Windows, Python 2.6 or 2.7 is also acceptable.",
    },
    main: {
        name: "Main program path",
        desc: "If specified once (like --main=\"1.py\"), it replaces the positional argument for the file to compile (entry). If specified multiple times (like --main=\"1.py\" --main=\"2.py\"), it enables \"multidist\", allowing you to create binaries depending on the file name or call name.\n(This allows multiple main programs using the same set of compile parameters)\n",
    },
// Control the inclusion of modules and packages in result
    include_package: {
        name: "Include package",
        desc: "Include an entire package. Provide it using Python namespace format, e.g., 'some_package.sub_package', then Nuitka will find and include it in the created binary or extension module and all modules found below on disk, making them importable.\nTo avoid unwanted subpackages like tests, use '--nofollow-import-to=*.tests'. Empty by default.\n(Note: 'include' means compiling the package or module into the binary, not adding it as a dependency)\n",
    },
    include_module: {
        name: "Include module",
        desc: "Include a single module. Provide it using Python namespace format, e.g., 'some_package.some_module', and Nuitka will find and include it in the created binary or extension module, making it importable. Empty by default.",
    },
    include_plugin_directory: {
        name: "Include plugin directory",
        desc: "Include code found in that directory, treating them as their own main files. This overrides other 'include' options.\nYou should favor other 'include' options that search by name rather than filename. They act on 'sys.path'.\nOnly for very special use cases. Can be given multiple times. Empty by default.",
    },
    include_plugin_files: {
        name: "Include plugin files",
        desc: "Include files that match the given PATTERN. Overrides all other follow options. Can be given multiple times. Empty by default.",
    },
    prefer_source_code: {
        name: "Prefer source code",
        desc: "For already compiled extension modules, if source code and extension module both exist, usually the extension module is used. For best performance, it's better to compile from available source code.\nIf not needed, use --nop-prefer-source-code to disable relevant warnings. Off by default.",
    },
// Control the following into imported modules
    follow_imports: {
        name: "Follow all imports",
        desc: "Follow all imported modules. On by default in standalone mode, off otherwise.",
    },
    follow_import_to: {
        name: "Follow import to module",
        desc: "Following import to that module or entire package if used. Can be given multiple times. Empty by default.",
    },
    nofollow_import_to: {
        name: "Do not follow import to module",
        desc: "Do not follow import to that module name even if used, or if it's a package name, never follow into that package. This overrides all other settings.\nCan also accept patterns like \"*.tests\". Can be given multiple times. Empty by default.",
    },
    nofollow_imports: {
        name: "Do not recurse into any imports",
        desc: "Do not recursively follow any imported modules. Overrides all other include options and cannot be used in standalone mode. Off by default.",
    },
    follow_stdlib: {
        name: "Follow imports into stdlib",
        desc: "Also recurse into modules imported from the standard library, greatly increasing compilation time, sometimes not fully tested or might fail. Off by default.",
    },
// Onefile options
    onefile_tempdir_spec: {
        name: "Onefile temp directory location",
        desc: "For onefile mode, use this as the extraction folder.\nFor example, use '{CACHE_DIR}/{COMPANY}/{PRODUCT}/{VERSION}' as a static cache path that won't be removed.",
        elements: {
            user_tempdir: {
                name: "User temp directory",
                desc: "Use the user's temporary directory",
            },
        },
    },
    onefile_child_grace_time: {
        name: "Onefile child process grace time",
        desc: "When stopping a child process, e.g., due to CTRL-C or window close, Python code gets a \"KeyboardInterrupt\" to handle tasks like data flushing.\nThis is the wait time before forcibly killing the child process, in milliseconds, default is 5000.",
    },
    onefile_no_compression: {
        name: "No compression for onefile",
        desc: "Disable payload compression when creating onefile. Mainly for debugging or saving time. Off by default.",
    },
    onefile_as_archive: {
        name: "Use archive for onefile",
        desc: "Create a onefile using an archive format that can be unpacked by \"nuitka-onefile-unpack\" instead of a stream only the onefile program itself can extract.",
    },
// Data files
    include_package_data: {
        name: "Include package data",
        desc: "Include data files for the given package. DLL and extension modules are not considered data files, so not included by this.\nSupports filename patterns, e.g.:\n--include-package-data=package_name (all files)\n--include-package-data=package_name:*.txt (specific type)\n--include-package-data=package_name:some_filename.dat (exact file)\nEmpty by default.",
    },
    include_data_files: {
        name: "Include data files",
        desc: "Include data files by assigned file name. Several forms are allowed:\n'--include-data-files=/path/to/file/.txt=folder_name/some.txt' copies one file (fails with multiple files).\n'--include-data-files=/path/to/files/.txt=folder_name/' places all matching files into that folder.\nFor recursive copying, use a form with three values: '--include-data-files=/path/to/scan=folder_name=/**/*.txt', preserving directory structure.\nEmpty by default.",
    },
    include_data_dir: {
        name: "Include data directory",
        desc: "Include all data files from a directory, recursively.\nFor non-recursive inclusion, see '--include-data-files' with patterns.\nE.g. '--include-data-dir=/path/some_dir=data/some_dir' for a plain copy of that directory.\nAll non-code files included. You can remove them via '--noinclude-data-files'. Empty by default.",
    },
    noinclude_data_files: {
        name: "Do not include data files",
        desc: "Exclude data files matching the given filename patterns, which refer to the target filename rather than the source path.\nTo ignore a file in 'package_name' for example, match 'package_name/*.txt', or to omit an entire directory use 'package_name'. Empty by default.",
    },
    include_onefile_external_data: {
        name: "Include external data for onefile",
        desc: "Place specified data files outside the onefile binary instead of inside it. Only relevant in '--onefile' mode.\nYou must first specify files as included in some way, then reference the distribution's target path with this option. Empty by default.",
    },
    list_package_data: {
        name: "List package data",
        desc: "Output the data files found for the given package name. Does not perform this by default.",
    },
    include_raw_dir: {
        name: "Include raw directory",
        desc: "Include the entire directory as-is in the distribution, recursively. See '--include-data-dir' for the correct option. Empty by default.",
    },
// Metadata support
    include_distribution_metadata: {
        name: "Include distribution metadata",
        desc: "Include metadata info for the given distribution name. Some packages check for the presence of metadata, version, entry points, etc.\nOnly makes sense for packages included in the compilation. Empty by default.",
    },
// DLL files
    noinclude_dlls: {
        name: "Do not include DLLs",
        desc: "Exclude DLL files matching the given filename pattern, referring to the target filename.\nTo ignore a DLL 'someDLL' in package_name, match 'package_name/someDLL.*'. Empty by default.",
    },
    list_package_dlls: {
        name: "List package DLLs",
        desc: "Output DLLs found for the given package name. Does not perform this by default.",
    },
    list_package_exe: {
        name: "List EXE files for the given package",
        desc: "Output EXEs found for the given package name. Does not perform this by default.",
    },
// Control the warnings to be given by Nuitka
    warn_implicit_exceptions: {
        name: "Warn about implicit exceptions",
        desc: "Enable warnings about implicit exceptions detected at compile time.",
    },
    warn_unusual_code: {
        name: "Warn about unusual code",
        desc: "Enable warnings about unusual code detected at compile time.",
    },
    assume_yes_for_downloads: {
        name: "Assume yes for downloads",
        desc: "Permit Nuitka to download external code if needed, e.g., dependency walker, ccache, or gcc on Windows. Disable by redirecting input from nul device.\nLike \"</dev/null\" or \"<NUL:\". By default, prompts on download.",
    },
    nowarn_mnemonic: {
        name: "Disable mnemonic warning",
        desc: "Disable warnings for the given mnemonic, typically a short string in the URL pointing to Nuitka’s site. Accepts shell patterns. Can be given multiple times. Empty by default.",
    },
// Immediate execution after compilation
    run: {
        name: "Run immediately",
        desc: "Execute the created binary (or import the compiled module) immediately. Off by default.",
    },
    debugger: {
        name: "Run in debugger",
        desc: "Run in a debugger (like 'gdb' or 'lldb') to automatically gather stack traces.\nUnless the NUITKA_DEBUGGER_CHOICE environment variable is set to specify a debugger, it auto-detects. Off by default.",
    },
// Compilation choices
    user_package_configuration_files: {
        name: "User package config files",
        desc: "User-provided Yaml files containing package configurations. You can include DLL files, remove redundancies, and add hidden dependencies. Check Nuitka documentation for the format. Can be given multiple times. Empty by default.",
    },
    full_compat: {
        name: "Full CPython compatibility",
        desc: "Ensure absolute compatibility with CPython. No minor deviations, e.g., no better traceback or exception messages.\nThese differences are not real incompatibilities, just differences. Only for testing, do not use in production.",
    },
    file_reference_choice: {
        name: "File reference choice",
        desc: "Select the value for '__file__'. In 'runtime' usage (default for standalone binaries and module mode), the binary or module infers '__file__' from its own location. Packages pretend they're under that directory, allowing data files in deployment.\nFor mere acceleration, 'original' reuses the source file location. 'frozen' uses '<frozen module_name>'. For compatibility, '__file__' always has a '.py' suffix regardless of the actual value.",
        elements: {
            original: {
                name: "original",
                desc: "Use the source file location",
            },
            frozen: {
                name: "frozen",
                desc: "Use '<frozen module_name>' symbol",
            },
        },
    },
    module_name_choice: {
        name: "Module name choice",
        desc: "Select '__name__' and '__package__'. 'runtime' (default for module mode) infers '__package__' from the package for full compatibility. 'original' (default in other modes) enables more static optimizations but is incompatible for modules that can be loaded into arbitrary packages.",
        elements: {
            original: {
                name: "original",
                desc: "Allow more static optimizations (default in other modes)",
            },
            runtime: {
                name: "runtime",
                desc: "Infer '__package__' from the package for full compatibility (default for module mode)",
            },
        },
    },
// Output choices
    output_filename: {
        name: "Output filename",
        desc: "Specify the name of the executable. Not valid for extension modules or standalone mode. Requires existing path info.\nDefaults to '<program_name>.exe' on this platform.",
        elements: {
            program_name: {
                name: "Program name",
                desc: "<program_name>",
            },
        },
    },
    output_dir: {
        name: "Output directory",
        desc: "Specify a location for intermediate and final output files. The chosen directory will contain the build folder, distribution folder, and binaries. Defaults to the current directory.",
        elements: {
            current_directory: {
                name: "Current directory",
                desc: "Current directory",
            },
        },
    },
    remove_output: {
        name: "Remove build folder",
        desc: "Remove the build folder after generating the exe or module file. Off by default.",
    },
    no_pyi_file: {
        name: "Do not create .pyi file",
        desc: "Do not create a '.pyi' file for extension modules built by Nuitka to detect implicit imports. Off by default.",
    },
    no_pyi_stubs: {
        name: "Do not create pyi stubs",
        desc: "When generating '.pyi' files for extension modules built by Nuitka, do not use stubgen.\nThey expose your API, but stubgen might cause issues. Off by default.",
    },
// Deployment control
    deployment: {
        name: "Deployment mode",
        desc: "Disable code that helps identify compatibility issues, e.g., repeated attempts to run modules with '-c' parameter. Once you deploy to end users, disable it. It's useful for development to spot issues. Off by default.",
    },
    no_deployment_flag: {
        name: "No deployment flag",
        desc: "Keep deployment mode but selectively disable parts of it. Deployment mode errors output these identifiers. Empty by default.",
    },
// Environment control
    force_runtime_environment_variable: {
        name: "Force runtime environment variable",
        desc: "Force an environment variable to the given value at runtime. Empty by default.",
    },
// Debug features
    debug: {
        name: "Debug mode",
        desc: "Perform all possible self-checks to discover bugs in Nuitka. Do not use in production.\nOff by default.",
    },
    no_debug_immortal_assumptions: {
        name: "Disable debug checks for Immortal Objects",
        desc: "Disable checks for known immortal objects performed with '--debug' on Python 3.12+.\nSome C libraries break them. When '--debug' is enabled, these checks are done by default.",
    },
    unstripped: {
        name: "Do not remove debug info",
        desc: "Keep debug info in the generated object files for better interaction with debuggers. Off by default.",
    },
    profile: {
        name: "Profiling",
        desc: "Enable vmprof-based time profiling. Currently not available. Off by default.",
    },
    trace_execution: {
        name: "Trace execution",
        desc: "Trace execution and output code lines before executing them. Off by default.",
    },
    xml: {
        name: "Output XML",
        desc: "Write the internal program structure and optimization results to the given file in XML format.",
    },
    experimental: {
        name: "Experimental",
        desc: "Use features marked as 'experimental'. If code does not contain experimental features, it may have no effect.\nYou need secret tags for each experimental feature (check the source).",
    },
    low_memory: {
        name: "Low memory mode",
        desc: "Try to use less memory by reducing forked C compiler tasks and using more memory-saving options. For embedded machines where you may have out-of-memory problems. Off by default.",
    },
    create_environment_from_report: {
        name: "Create environment from report",
        desc: "From the specified report file, create a new virtual environment in a non-existent path, e.g. '--report=compilation-report.xml'. Off by default.",
    },
    generate_c_only: {
        name: "Generate C source only",
        desc: "Generate only C source code without compiling to a binary or module. Used for debugging and coverage analysis to save CPU. Off by default.\nDon't assume you can directly use this.",
    },
// Nuitka development features
    devel_missing_code_helpers: {
        name: "Devel - missing code helpers",
        desc: "Report warnings about code helpers that are tried but do not exist.\nHelps identify optimization opportunities from unused type knowledge. Default false.",
    },
    devel_missing_trust: {
        name: "Devel - missing trust",
        desc: "Report warnings about imports that can be trusted but currently are not.\nUsed to spot improvements in handling hard modules that sometimes allow more static optimizations. Default false.",
    },
    devel_recompile_c_only: {
        name: "Devel - recompile C source only",
        desc: "Not incremental compilation, for Nuitka development. Recompile existing C files only. Allows rebuilding modified C files for quick debugging.\nE.g., check if code compiles or debug outputs. Off by default. Dependent on compiled Python source.",
    },
    devel_internal_graph: {
        name: "Devel - internal graph",
        desc: "Create graphs of the internal optimization process. Do not use for large programs. Off by default.",
    },
// Backend C compiler choice
    clang: {
        name: "Force clang",
        desc: "Force usage of clang compiler. On Windows, requires a working Visual Studio version. Off by default.",
    },
    mingw64: {
        name: "Force mingw64",
        desc: "Force usage of MinGW64 on Windows. Off by default unless using MSYS2 and MinGW Python.",
    },
    msvc: {
        name: "Use specific MSVC version",
        desc: "Force usage of a specific MSVC version on Windows, e.g., \"14.3\" (MSVC 2022). Use 'list' to show installed compilers, or 'latest'. Defaults to the latest MSVC if available, otherwise MinGW64.",
        elements: {
            latest: {
                name: "Latest",
                desc: "Use the latest MSVC version",
            },
        },
    },
    jobs: {
        name: "Number of parallel compile tasks",
        desc: "Number of parallel C compiler jobs. Negative means system CPU count minus the given number.\nBy default, uses all CPU cores unless low memory mode is enabled, which defaults to 1.",
    },
    lto: {
        name: "Link time optimization",
        desc: "Use link time optimization (MSVC, gcc, clang). Allowed values: 'yes', 'no', 'auto' (known to be available). Default 'auto'.",
        elements: {
            yes: {
                name: "yes",
                desc: "Use link time optimization",
            },
            no: {
                name: "no",
                desc: "Do not use link time optimization",
            },
            auto: {
                name: "auto",
                desc: "Use link time optimization automatically",
            },
        },
    },
    static_libpython: {
        name: "Use Python static library",
        desc: "Use a static library version of Python. Allowed values: 'yes', 'no', 'auto' (known to be available). Default 'auto'.",
        elements: {
            yes: {
                name: "yes",
                desc: "Use static Python library",
            },
            no: {
                name: "no",
                desc: "Do not use static Python library",
            },
            auto: {
                name: "auto",
                desc: "Automatically use static Python library",
            },
        },
    },

    cf_protection: {
        name: "gcc compiler CF protection mode",
        desc: "This option is specific to gcc. Choose 'cf-protection' (cf protection) mode for the gcc compiler. The default value 'auto' uses gcc's default, but you can override it. For example, use 'none' to disable it. See gcc documentation for details on '-fcf-protection'.",
        elements: {
            auto: {
                name: "Automatic",
                desc: "Use gcc's default value",
            },
        },
    },
    // Cache Control
    disable_cache: {
        name: "Disable cache",
        desc: "Disable selected caches. 'all' disables all. Valid values are 'all', 'ccache', 'bytecode', 'compression', 'dll-dependencies'. Multiple values can be provided or separated by commas. Default is none.",
        elements: {
            all: {
                name: "All",
                desc: "Disable all caches",
            },
            ccache: {
                name: "ccache cache",
                desc: "Do not attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl).",
            },
            bytecode: {
                name: "Bytecode cache",
                desc: "Do not reuse dependency analysis results for modules, especially standard library modules, which may be included as bytecode.",
            },
            compression: {
                name: "Compression cache",
                desc: "Disable compression cache",
            },
            dll_dependencies: {
                name: "DLL dependency cache",
                desc: "Disable dependency analyzer cache. This significantly slows down creating the distribution folder but can be used if the cache is suspected to cause errors.",
            },
        },
    },
    clean_cache: {
        name: "Clean cache",
        desc: "Clean the specified caches before execution. 'all' cleans all. Valid values are 'all', 'ccache', 'bytecode', 'compression', 'dll-dependencies'. Multiple values can be provided or separated by commas. Default is none.",
        elements: {
            all: {
                name: "All",
                desc: "Clean all caches",
            },
            ccache: {
                name: "ccache cache",
                desc: "Clean ccache cache",
            },
            bytecode: {
                name: "Bytecode cache",
                desc: "Clean bytecode cache",
            },
            compression: {
                name: "Compression cache",
                desc: "Clean compression cache",
            },
            dll_dependencies: {
                name: "DLL dependency cache",
                desc: "Clean DLL dependency cache",
            },
        },
    },
    disable_ccache: {
        name: "Disable ccache",
        desc: "Do not attempt to use ccache (gcc, clang, etc.) or clcache (MSVC, clangcl). Equivalent to --disable-cache=ccache.",
    },
    disable_dll_dependency_cache: {
        name: "Disable DLL dependency cache",
        desc: "Disable dependency analyzer cache. This significantly slows down creating the distribution folder but may be used if the cache is suspected to cause errors. Equivalent to --disable-cache=dll-dependencies.",
    },
    force_dll_dependency_cache_update: {
        name: "Force DLL dependency cache update",
        desc: "Used to update the dependency analyzer cache. This significantly slows down creating the distribution folder but may be used if the cache is suspected to cause errors or needs updating.",
    },
    // PGO compilation choices
    pgo_c: {
        name: "Profile Guided Optimization",
        desc: "Enable Profile Guided Optimization (PGO) at the C level by first doing an analysis run and then feeding results back into the C compilation. Note: This is experimental and currently does not work with standalone mode. Default is off.",
    },
    pgo_args: {
        name: "PGO arguments",
        desc: "Additional parameters passed during the PGO run. These parameters are passed to the special build executable during the PGO analysis run. Default is empty.",
    },
    pgo_executable: {
        name: "PGO executable",
        desc: "The command to run when collecting profile information. Used only if you need to start it via a prepared script. The default is the created program.",
    },
    // Tracing features
    report: {
        name: "Output report",
        desc: "Provide an XML filename to create a report in XML with details about modules, data files, compilation, plugins, etc. This is also useful for issue reporting. For example, these reports can be used to easily recreate an environment with '--create-environment-from-report'. The report contains a lot of information. Default is off.",
    },
    report_diffable: {
        name: "Report diffable",
        desc: "Report data in a comparable way, i.e., no run-time or memory usage values that change. Default is off.",
    },
    report_user_provided: {
        name: "Report user provided",
        desc: "Report your own data. This can be given multiple times and can be any form of 'key=value'. The key should be an identifier, e.g., '--report-user-provided=pipenv-lock-hash=64a5e4' to track some input value. Default is empty.",
    },
    report_template: {
        name: "Report template",
        desc: "Report using a template. Requires providing the template and output filename in 'template.rst.j2:output.rst' format. For built-in templates, see the user manual. Can be given multiple times. Default is empty.",
    },
    quiet: {
        name: "Quiet mode",
        desc: "Suppress all informational output but show warnings. Default off.",
    },
    show_scons: {
        name: "Show scons",
        desc: "Display executed commands and the detected compiler details from the C build backend Scons. Default off.",
    },
    no_progressbar: {
        name: "No progress bar",
        desc: "Disable the progress bar. Default off.",
    },
    show_progress: {
        name: "Show progress",
        desc: "Deprecated: Provide progress information and statistics. Disables the normal progress bar. Default off.",
    },
    show_memory: {
        name: "Show memory",
        desc: "Display memory usage. Default off.",
    },
    show_modules: {
        name: "Show modules",
        desc: "Deprecated: Use '--report' instead. Provides information about included modules and DLLs. Default off.",
    },
    show_modules_output: {
        name: "Show modules output path",
        desc: "Specifies where '--show-modules' output goes. Must be a file name. Default is stdout.",
    },
    verbose: {
        name: "Verbose mode",
        desc: "Show details about actions taken, which can be extensive when optimizing. Default off.",
    },
    verbose_output: {
        name: "Verbose output path",
        desc: "Specifies where '--verbose' output goes. Must be a file name. Default is stdout.",
    },
    // General OS controls
    force_stdout_spec: {
        name: "Force standard output spec",
        desc: "Force the program's standard output to this location. Useful for console-disabled programs and Windows service plugins in the Nuitka commercial version. Not active by default, e.g., '{PROGRAM_BASE}.out.txt'. See the user manual for all available values.",
    },
    force_stderr_spec: {
        name: "Force standard error spec",
        desc: "Force the program's standard error to this location. Useful for console-disabled programs and Windows service plugins in the Nuitka commercial version. Not active by default, e.g., '{PROGRAM_BASE}.err.txt'. See the user manual for all available values.",
    },
    // Windows specific controls
    windows_console_mode: {
        name: "Windows console mode",
        desc: "Select the console mode to use. The default mode is 'force'.",
        elements: {
            force: {
                name: "Force mode",
                desc: "If no console window is available, create one. This applies if the program is started from a console window.",
            },
            disable: {
                name: "Disable mode",
                desc: "No console is created or used.",
            },
            attach: {
                name: "Attach mode",
                desc: "Use the existing console for output.",
            },
            hide: {
                name: "Hide mode",
                desc: "The newly created console will be hidden, while an existing console behaves like 'force' mode.",
            },
        },
    },
    windows_icon_from_ico: {
        name: "Windows icon (ico file)",
        desc: "Add an icon to the executable. Can be given multiple times for different resolutions or for files containing multiple icons. You can also use '#<n>' suffix to specify a particular icon if the file has multiple icons, ignoring the others, where n is an integer starting at 1.",
    },
    windows_icon_from_exe: {
        name: "Windows icon (exe file)",
        desc: "Copy icon(s) from this executable (Windows only).",
    },
    onefile_windows_splash_screen_image: {
        name: "Onefile Windows splash screen image",
        desc: "When compiling to a single file under Windows, display this image while the application loads. Default off.",
    },
    windows_uac_admin: {
        name: "Request Windows UAC admin privileges",
        desc: "Request admin privileges via Windows UAC when executed (Windows only). Default off.",
    },
    windows_uac_uiaccess: {
        name: "Request Windows UAC UIAccess",
        desc: "Request Windows UAC UI access, needed to run in some restricted folders and remote desktop usage (Windows only). Default off.",
    },
    // macOS specific controls
    macos_create_app_bundle: {
        name: "Create macOS application bundle",
        desc: "When compiling for macOS, create a bundle instead of a normal binary application. This is the only way to remove the console, enable high-DPI graphics, etc., and implies standalone mode. Default off.",
    },
    macos_target_arch: {
        name: "macOS target architecture",
        desc: "Which architecture the program should run on. Defaults and constraints are dictated by the Python environment. The default is 'native', the architecture Python is running on.",
        elements: {
            native: {
                name: "Native architecture",
                desc: "Default, the architecture that Python is running on",
            },
        },
    },
    macos_app_icon: {
        name: "Path to macOS application icon",
        desc: "Add an icon for the app bundle. Only one can be provided. Python icon is used by default if available.",
        elements: {
            python_icon: {
                name: "Python icon",
                desc: "Python icon if available, the default",
            },
        },
    },
    macos_signed_app_name: {
        name: "macOS signed application name",
        desc: "When signing on macOS, use this application name. For best results, follow a format like 'com.YourCompany.AppName' because it's globally unique and may allow access to protected APIs.",
    },
    macos_app_name: {
        name: "macOS application name",
        desc: "The product name to use in the macOS bundle information. Defaults to the base filename of the binary.",
    },
    macos_app_mode: {
        name: "macOS application mode",
        desc: "The application mode for the bundle.",
        elements: {
            gui: {
                name: "GUI mode",
                desc: "If you start a window and want it in the Dock, the default is 'gui'.",
            },
            background: {
                name: "Background mode",
                desc: "If no window is used, the app will be a 'background' application.",
            },
            ui_element: {
                name: "UI element mode",
                desc: "Somewhere between the two above. The app won't appear in the Dock, but once it opens a window, it gains full access to the desktop.",
            },
        },
    },
    macos_sign_identity: {
        name: "macOS signing identity",
        desc: "When signing on macOS, a temporary identity is used by default, but you can specify another one here. Currently, code signing on macOS is mandatory and can't be disabled. Use 'auto' to detect the single installed identity. If none is given, 'ad-hoc' is used.",
        elements: {
            auto: {
                name: "Auto",
                desc: "Detect your single installed identity",
            },
            ad_hoc: {
                name: "Ad-hoc signing",
                desc: "The default value",
            },
        },
    },
    macos_sign_notarization: {
        name: "macOS signing notarization",
        desc: "When performing notarization signing on macOS, use the correct TeamID from Apple and the required hardened runtime signing options, so it can be accepted.",
    },
    macos_app_version: {
        name: "macOS application version",
        desc: "The product version to use in the macOS bundle information. If not specified, defaults to '1.0'.",
        elements: {
            default_version: {
                name: "1.0",
                desc: "The default value",
            },
        },
    },
    macos_app_protected_resource: {
        name: "Request macOS protected resource permission",
        desc: "Request permission to access protected resources on macOS, e.g. 'NSMicrophoneUsageDescription:Microphone access for recording audio.' which also shows an info text explaining why this is needed. The part before the colon is an OS identifier, and after the colon is the explanation text. Valid values can be found at https://developer.apple.com/documentation/bundleresources/information_property_list/protected_resources. This option can be given multiple times. Default is empty.",
    },
    // Linux specific controls
    linux_icon: {
        name: "Linux icon",
        desc: "Add an icon to the single-file binary. Only one can be given. Python icon is used by default if available.",
    },
    // Binary Version Information
    company_name: {
        name: "Company name",
        desc: "Company name to use in the version information. Default is none.",
    },
    product_name: {
        name: "Product name",
        desc: "Product name to use in the version information. Defaults to the base filename of the binary.",
    },
    file_version: {
        name: "File version",
        desc: "File version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0. More numbers or strings are not allowed. Default none.",
    },
    product_version: {
        name: "Product version",
        desc: "Product version to use in the version information. Must be a sequence of up to 4 numbers, e.g., 1.0 or 1.0.0.0. More numbers or strings are not allowed. Default none.",
    },
    file_description: {
        name: "File description",
        desc: "File description to use in the version information. Currently Windows only. Defaults to the filename of the binary.",
    },
    copyright: {
        name: "Copyright text",
        desc: "Copyright info to use in the version information. Currently Windows/macOS only. Default is none.",
    },
    trademarks: {
        name: "Trademarks text",
        desc: "Trademarks to use in the version information. Currently Windows/macOS only. Default is none.",
    },
    // Plugin control
    enable_plugins: {
        name: "Enable plugins",
        desc: "Enable plugins. Must be the plugin name. Default is empty.",
        elements: {
            anti_bloat: {
                name: "Anti-bloat",
                desc: "Remove silly import patches from widely used libraries' source code.",
            },
            data_files: {
                name: "Include data files",
                desc: "Include data files specified by package configuration.",
            },
            delvewheel: {
                name: "delvewheel support",
                desc: "Support packages installed with delvewheel in standalone mode",
            },
            dill_compat: {
                name: "dill package compatibility",
                desc: "Support compatibility with 'dill'.",
            },
            dll_files: {
                name: "Include DLL files",
                desc: "Include DLL config files via the package configuration.",
            },
            enum_compat: {
                name: "enum compatibility",
                desc: "Support Python2 and the enum package.",
            },
            eventlet: {
                name: "eventlet support",
                desc: "Integrate the 'eventlet' dependency and patches needed for the 'dns' package.",
            },
            gevent: {
                name: "gevent support",
                desc: "Support the 'gevent' package.",
            },
            gi: {
                name: "GI support",
                desc: "Include typelib dependencies for GI.",
            },
            glfw: {
                name: "glfw support",
                desc: "Use 'OpenGL' (PyOpenGL) and 'glfw' in standalone mode.",
            },
            implicit_imports: {
                name: "Implicit imports",
                desc: "Provide implicit imports from package configurations.",
            },
            kivy: {
                name: "kivy support",
                desc: "Support the 'kivy' package.",
            },
            matplotlib: {
                name: "matplotlib support",
                desc: "Support the 'matplotlib' module.",
            },
            multiprocessing: {
                name: "multiprocessing support",
                desc: "Support Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options nanny",
                desc: "Warn users about potential issues based on package configs.",
            },
            pbr_compat: {
                name: "pbr compatibility",
                desc: "Support the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "pkg resources support",
                desc: "Handle pkg resources.",
            },
            pmw_freezer: {
                name: "pmw support",
                desc: "Support the 'Pmw' package.",
            },
            pylint_warnings: {
                name: "pylint warnings",
                desc: "Support PyLint/PyDev code markers.",
            },
            pyqt5: {
                name: "PyQt5 support",
                desc: "Support the 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 support",
                desc: "Support the 'PyQt6' package.",
            },
            pyside2: {
                name: "PySide2 support",
                desc: "Support the 'PySide2' package.",
            },
            pyside6: {
                name: "PySide6 support",
                desc: "Support the 'PySide6' package.",
            },
            pywebview: {
                name: "PyWebview support",
                desc: "Support the 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter support",
                desc: "Support Python's Tk module.",
            },
            transformers: {
                name: "transformers implicit imports",
                desc: "Provide implicit imports for the transformers package.",
            },
            upx: {
                name: "Auto use UPX",
                desc: "Automatically use UPX to compress the created binary.",
            },
        },
    },
    disable_plugins: {
        name: "Disable plugins",
        desc: "Disable plugins by name. Use '--plugin-list' to see the full list and exit. Disabling standard plugins is generally not recommended. Default is empty.",
        elements: {
            anti_bloat: {
                name: "Anti-bloat",
                desc: "Remove silly import patches from widely used libraries' source code.",
            },
            data_files: {
                name: "Include data files",
                desc: "Include data files specified by package configuration.",
            },
            delvewheel: {
                name: "delvewheel support",
                desc: "Support packages installed with delvewheel in standalone mode",
            },
            dill_compat: {
                name: "dill package compatibility",
                desc: "Support compatibility with 'dill'.",
            },
            dll_files: {
                name: "Include DLL files",
                desc: "Include DLL config files via the package configuration.",
            },
            enum_compat: {
                name: "enum compatibility",
                desc: "Support Python2 and the enum package.",
            },
            eventlet: {
                name: "eventlet support",
                desc: "Integrate the 'eventlet' dependency and patches needed for the 'dns' package.",
            },
            gevent: {
                name: "gevent support",
                desc: "Support the 'gevent' package.",
            },
            gi: {
                name: "GI support",
                desc: "Include typelib dependencies for GI.",
            },
            glfw: {
                name: "glfw support",
                desc: "Use 'OpenGL' (PyOpenGL) and 'glfw' in standalone mode.",
            },
            implicit_imports: {
                name: "Implicit imports",
                desc: "Provide implicit imports from package configurations.",
            },
            kivy: {
                name: "kivy support",
                desc: "Support the 'kivy' package.",
            },
            matplotlib: {
                name: "matplotlib support",
                desc: "Support the 'matplotlib' module.",
            },
            multiprocessing: {
                name: "multiprocessing support",
                desc: "Support Python's 'multiprocessing' module.",
            },
            no_qt: {
                name: "Disable Qt",
                desc: "Disable all Qt bindings in standalone mode.",
            },
            options_nanny: {
                name: "Options nanny",
                desc: "Warn users about potential issues based on package configs.",
            },
            pbr_compat: {
                name: "pbr compatibility",
                desc: "Support the 'pbr' package in standalone mode.",
            },
            pkg_resources: {
                name: "pkg resources support",
                desc: "Handle pkg resources.",
            },
            pmw_freezer: {
                name: "pmw support",
                desc: "Support the 'Pmw' package.",
            },
            pylint_warnings: {
                name: "pylint warnings",
                desc: "Support PyLint/PyDev code markers.",
            },
            pyqt5: {
                name: "PyQt5 support",
                desc: "Support the 'PyQt5' package.",
            },
            pyqt6: {
                name: "PyQt6 support",
                desc: "Support the 'PyQt6' package.",
            },
            pyside2: {
                name: "PySide2 support",
                desc: "Support the 'PySide2' package.",
            },
            pyside6: {
                name: "PySide6 support",
                desc: "Support the 'PySide6' package.",
            },
            pywebview: {
                name: "PyWebview support",
                desc: "Support the 'webview' package (pywebview on PyPI).",
            },
            tk_inter: {
                name: "Tkinter support",
                desc: "Support Python's Tk module.",
            },
            transformers: {
                name: "transformers implicit imports",
                desc: "Provide implicit imports for the transformers package.",
            },
            upx: {
                name: "Auto use UPX",
                desc: "Automatically use UPX to compress the created binary.",
            },
        },
    },
    plugin_list: {
        name: "Plugin list",
        desc: "Show all available plugins and exit. Default off.",
    },
    user_plugin: {
        name: "User plugin",
        desc: "Filename for a user plugin. Can be given multiple times. Default is empty.",
    },
    module_parameter: {
        name: "Module parameter",
        desc: "Provide a module parameter. Some packages require extra decisions. The current format is --module-parameter=module.name-option-name=value. Default is empty.",
    },
    show_source_changes: {
        name: "Show source changes",
        desc: "Show the changes made to the original Python files before compilation. Primarily for debugging plugins and Nuitka config. For example, '-show-source-changes=numpy.**' shows all changes under that namespace, or '*' for everything (potentially huge). Default is empty.",
    },
    // Cross compilation
    target: {
        name: "Target",
        desc: "The cross-compilation target. This feature is highly experimental, in development, and currently unavailable. We are working on '--target=wasi'. Other targets are not supported yet.",
    },
    // Plugin options of 'anti-bloat'
    show_anti_bloat_changes: {
        name: "Show anti-bloat changes",
        desc: "Comment on changes made by the plugin.",
    },
    noinclude_setuptools_mode: {
        name: "No-include setuptools mode",
        desc: "How to handle 'setuptools' or 'setuptools_scm' imports. This package can become large with many dependencies, so it's best avoided.",
    },
    noinclude_pytest_mode: {
        name: "No-include pytest mode",
        desc: "How to handle 'pytest' or 'nose' imports. This package can become large with many dependencies, so it's best avoided.",
    },
    noinclude_unittest_mode: {
        name: "No-include unittest mode",
        desc: "How to handle 'unittest' imports. This package can become large with many dependencies, so it's best avoided.",
    },
    noinclude_pydoc_mode: {
        name: "No-include pydoc mode",
        desc: "How to handle 'pydoc' imports. This package indicates code not needed in deployment, so it's best avoided.",
    },
    noinclude_IPython_mode: {
        name: "No-include IPython mode",
        desc: "How to handle 'IPython' imports. This package can become large with many dependencies, so it's best avoided.",
    },
    noinclude_dask_mode: {
        name: "No-include dask mode",
        desc: "How to handle 'dask' imports. This package can become large with many dependencies, so it's best avoided.",
    },
    noinclude_numba_mode: {
        name: "No-include numba mode",
        desc: "How to handle 'numba' imports. This package can be large with many dependencies and currently doesn't work well in standalone mode. It's best avoided.",
    },
    noinclude_default_mode: {
        name: "No-include default mode",
        desc: "This effectively provides a default 'warning' level to the above options and can be used to enable them all.",
    },
    noinclude_custom_mode: {
        name: "No-include custom mode",
        desc: "How to handle specific imports. Format: module name (top-level package) + an option ('error', 'warning', 'nofollow'), e.g., 'PyQt5:error'.",
    },
    // Plugin options of 'playwright'
    playwright_include_browser: {
        name: "playwright include browser",
        desc: "Which Playwright browsers to include. Can be given multiple times. Use 'all' to include all installed browsers.",
        elements: {
            all: {
                name: "Include all",
                desc: "Include all installed browsers",
            },
        },
    },
    // Plugin options of 'spacy'
    spacy_language_model: {
        name: "spaCy language model",
        desc: "Which spaCy language model to include. Can be given multiple times. Use 'all' to include all downloaded models.",
        elements: {
            all: {
                name: "Include all",
                desc: "Include all downloaded models",
            },
        },
    },
};